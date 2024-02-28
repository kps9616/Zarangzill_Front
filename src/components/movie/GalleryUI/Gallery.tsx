
import React, { useContext, useCallback, useEffect, useState } from 'react';
import { Image, Alert, Linking, Platform, SafeAreaView, Text, View, Animated, Easing, StyleSheet, ViewProps, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import Permissions, { PERMISSIONS } from 'react-native-permissions';
import { CameraRoll, PhotoIdentifier, useCameraRoll, } from '@react-native-camera-roll/camera-roll'
import { FlatList } from 'react-native-gesture-handler';
import { ShimmerView } from './ShimmerView';
import { VESDK } from 'react-native-videoeditorsdk';
import { useNavigation } from "@react-navigation/native";
import { uploadFile } from "../../../apis/video/video.api";
import AppContext from "../../../../AppContext";

const Gallery: React.FC = () => {
    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [videos, setVideos] = useState<PhotoIdentifier[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [getPhotos, save] = useCameraRoll();
    const navigation = useNavigation();
    const myContext = useContext(AppContext);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);

    const fetchVideos = useCallback(async () => {
        if (!hasPermission) {
            //Alert.alert("권한 문제", "갤러리 접근 권한이 없습니다.");
            return;
        }
        setIsLoading(true);
        try {
            const res = await CameraRoll.getPhotos({
                first: 21,
                assetType: 'Videos',
            });
            if (res.edges.length > 0) {
                setVideos(res.edges);
                setNextCursor(res.page_info.end_cursor);
                //Alert.alert("로딩 성공", "비디오 데이터가 성공적으로 로드되었습니다.");
            } else {
                //Alert.alert("데이터 없음", "로드할 비디오가 더 이상 없습니다.");
            }
        } catch (error) {
            console.error(error);
            // Alert.alert("로딩 실패", "비디오 데이터 로딩 중 에러가 발생했습니다.");
        } finally {
            setIsLoading(false);
        }
    }, [hasPermission]);



    const fetchMoreVideos = useCallback(async () => {
        if (isFetchingMore || !nextCursor) {
            // 이미 데이터를 더 불러오는 중이거나, 더 이상 불러올 데이터가 없으면 아무것도 하지 않습니다.
            return;
        }
        setIsFetchingMore(true); // 데이터를 더 불러오는 상태로 설정
        try {
            const res = await CameraRoll.getPhotos({
                first: 21, // 다음 페이지의 사이즈
                assetType: 'Videos',
                after: nextCursor, // 다음 페이지 커서
            });
            if (res.edges.length > 0) {
                setVideos(prevVideos => [...prevVideos, ...res.edges]);
                setNextCursor(res.page_info.end_cursor);
                //Alert.alert('데이터 불러오기 시도');
            }
        } catch (error) {
            console.error(error);
            //Alert.alert('데이터 불러오는 중 에러');
        } finally {
            setIsFetchingMore(false); // 데이터 불러오기 완료
            //Alert.alert('데이터 불러오기 완료');
        }
    }, [isFetchingMore, nextCursor]);



    useEffect(() => {
        if (hasPermission) {
            fetchVideos();
        }
    }, [hasPermission, fetchVideos]);


    const openSettingsAlert = useCallback(({ title }: { title: string }) => {
        Alert.alert(title, '', [
            {
                isPreferred: true,
                style: 'default',
                text: 'Open Settings',
                onPress: () => Linking?.openSettings(),
            },
            {
                isPreferred: false,
                style: 'destructive',
                text: 'Cancel',
                onPress: () => { },
            },
        ]);
    }, []);

    const checkAndroidPermissions = useCallback(async () => {
        if (parseInt(Platform.Version as string, 10) >= 33) {
            const permissions = await Permissions.checkMultiple([
                PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
                PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
            ]);
            if (
                permissions[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
                Permissions.RESULTS.GRANTED &&
                permissions[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] ===
                Permissions.RESULTS.GRANTED
            ) {
                setHasPermission(true);
                return;
            }
            const res = await Permissions.requestMultiple([
                PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
                PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
            ]);
            if (
                res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
                Permissions.RESULTS.GRANTED &&
                res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] ===
                Permissions.RESULTS.GRANTED
            ) {
                setHasPermission(true);
            }
            if (
                res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
                Permissions.RESULTS.DENIED ||
                res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] === Permissions.RESULTS.DENIED
            ) {
                checkAndroidPermissions();
            }
            if (
                res[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
                Permissions.RESULTS.BLOCKED ||
                res[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] ===
                Permissions.RESULTS.BLOCKED
            ) {
                openSettingsAlert({
                    title: '설정에서 갤러리 접근 권한을 허용해주세요.',
                });
            }
        } else {
            const permission = await Permissions.check(
                PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
            );
            if (permission === Permissions.RESULTS.GRANTED) {
                setHasPermission(true);
                return;
            }
            const res = await Permissions.request(
                PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
            );
            if (res === Permissions.RESULTS.GRANTED) {
                setHasPermission(true);
            }
            if (res === Permissions.RESULTS.DENIED) {
                checkAndroidPermissions();
            }
            if (res === Permissions.RESULTS.BLOCKED) {
                openSettingsAlert({
                    title: '설정에서 갤러리 접근 권한을 허용해주세요.',
                });
            }
        }
    }, [openSettingsAlert]);

    const checkPermission = useCallback(async () => {
        let permissionStatus = '';
        if (Platform.OS === 'ios') {
            const permission = await Permissions.check(PERMISSIONS.IOS.PHOTO_LIBRARY);
            permissionStatus = permission;
            if (permission === Permissions.RESULTS.GRANTED || permission === Permissions.RESULTS.LIMITED) {
                setHasPermission(true);
                //Alert.alert("권한 상태", "갤러리 접근 권한이 허용되었습니다.");
            } else {
                const res = await Permissions.request(PERMISSIONS.IOS.PHOTO_LIBRARY);
                permissionStatus = res;
                if (res === Permissions.RESULTS.GRANTED || res === Permissions.RESULTS.LIMITED) {
                    setHasPermission(true);
                    //Alert.alert("권한 상태", "갤러리 접근 권한이 허용되었습니다.");
                } else {
                    // Alert.alert("권한 상태", "갤러리 접근 권한이 거부되었습니다.");
                }
            }
        } else if (Platform.OS === 'android') {
            checkAndroidPermissions();
        }
    }, [checkAndroidPermissions, openSettingsAlert]);

    useEffect(() => {
        checkPermission();
    }, [checkPermission]);

    useEffect(() => {
        checkPermission().then(fetchVideos);
    }, [checkPermission, fetchVideos]);


    //편집기 호출 함수
    const openVideoEditor = async (uri: string) => {
        // 선택한 영상의 URI를 이용하여 편집기를 엽니다.
        try {
            const result = await VESDK.openEditor({ uri });
            // 성공적으로 편집된 후의 로직을 추가합니다.
            navigation.navigate('UploadUI');
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "비디오 편집기를 여는데 문제가 발생했습니다.");
        }
    };

    return (
        <SafeAreaView>
            <FlatList
                onEndReached={fetchMoreVideos} // 리스트 끝에 도달했을 때 함수 호출
                onEndReachedThreshold={0.5} // 리스트 끝에서 50% 남았을 때 함수 호출
                ListFooterComponent={() => {
                    return isLoading ? <ActivityIndicator /> : null;
                }}
                numColumns={3}
                data={isLoading ? Array(15).fill('') : videos}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => {
                    if (isLoading) {
                        return (
                            <ShimmerView key={index} delay={index * 100} width={'100%'} />
                        );
                    }
                    return (
                        <TouchableOpacity onPress={() => openVideoEditor(item.node.image.uri)}>
                            <Image
                                source={{ uri: item?.node?.image?.uri }}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    );
                }}
                style={styles.list}
            />
        </SafeAreaView>
    );
};

const { width: screenWidth } = Dimensions.get('window');
// 이미지 사이의 마진을 계산할 때, 각 이미지 사이에 2px, 양 끝에 2px 씩을 고려하여 총 4px을 사용
const totalMarginSpace = 4 * 2; // 각 이미지 사이에 2px, 총 3개의 공간이므로 4를 곱함
const imageWidth = (screenWidth - totalMarginSpace) / 3; // 전체 너비에서 마진 공간을 빼고 3으로 나눔


const styles = StyleSheet.create({
    list: { padding: 16 },
    image: {
        height: imageWidth,
        width: imageWidth - 12,
        borderRadius: 4,
        margin: 2,
    },
});

export default Gallery;