
import React, { useContext, useCallback, useEffect, useState } from 'react';
import { Image, Alert, Linking, Platform, SafeAreaView, Text, View, Animated, Easing, StyleSheet, ViewProps, TouchableOpacity, Dimensions } from 'react-native';
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
        const res = await CameraRoll.getPhotos({
            first: 21,
            assetType: 'Videos',
        });
        setVideos(res?.edges);
        setIsLoading(false);
    }, []);


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
        if (Platform.OS === 'ios') {
            const permission = await Permissions.check(PERMISSIONS.IOS.PHOTO_LIBRARY);
            if (permission === Permissions.RESULTS.GRANTED ||
                permission === Permissions.RESULTS.LIMITED) {
                setHasPermission(true);
                return;
            }
            const res = await Permissions.request(PERMISSIONS.IOS.PHOTO_LIBRARY);
            if (res === Permissions.RESULTS.GRANTED ||
                res === Permissions.RESULTS.LIMITED) {
                setHasPermission(true);
            }
            if (res === Permissions.RESULTS.BLOCKED) {
                openSettingsAlert({
                    title: '설정에서 갤러리 접근 권한을 허용해주세요.',
                });
            }
        } else if (Platform.OS === 'android') {
            checkAndroidPermissions();
        }
    }, [checkAndroidPermissions, openSettingsAlert]);

    useEffect(() => {
        checkPermission();
    }, [checkPermission]);


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
                numColumns={3} // Set the number of columns to 1 for full-width images
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

const { width: screenWidth } = Dimensions.get('window'); // Flatlist가 제대로 100프로로 표시되기 위한 선언
const imageWidth = screenWidth / 3 - 4; // 패딩값 분의 마진값에서 4를 뺍니다.

const styles = StyleSheet.create({
    list: { padding: 16 },
    image: {
        height: imageWidth,
        width: imageWidth,
        borderRadius: 4,
        margin: 2,
    },
});

export default Gallery;