import React, { useContext, useEffect, useState } from 'react';
import { useCameraUI } from '../../../contexts/CameraUIContext';
import { Alert, View, TouchableOpacity, StyleSheet, Button, SafeAreaView, Dimensions } from 'react-native';
import Video from 'react-native-video';
import PreviewDelBtn from './PreviewDelBtn';
import { VESDK } from "react-native-videoeditorsdk";
import { CameraRoll, useCameraRoll } from '@react-native-camera-roll/camera-roll';
import { uploadFile } from "../../../apis/video/video.api";
import AppContext from "../../../../AppContext";
import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native"; // VESDK import

const PreviewScreen = () => {
    const { videoPath, isPreview, isBGM, iSound, isPlayTimeBGM, isTimer } = useCameraUI();
    const [photos, getPhotos, save] = useCameraRoll();
    const myContext = useContext(AppContext);
    const navigation = useNavigation();

    useEffect(() => {
        const focusListener = navigation.addListener('focus', () => {
            if (isBGM) {
                iSound?.setCurrentTime(isPlayTimeBGM);
                iSound?.play();
                const timer = setTimeout(() => {
                    iSound?.stop();
                }, isTimer * 1000);

                // 클린업 함수에서 타이머를 취소
                return () => clearTimeout(timer);
            }
        });

        const blurListener = navigation.addListener('blur', () => {
            if (isBGM) {
                iSound?.stop();
            }
        });

        return () => {
            // 이벤트 리스너 정리
            navigation.removeListener('focus', focusListener);
            navigation.removeListener('blur', blurListener);
        };

    }, [navigation]);

    // 비디오를 편집기로 불러오는 함수
    const openVideoEditor = async () => {
        if (!videoPath) return; // 비디오 경로가 없으면 함수 종료

        try {
            const result = await VESDK.openEditor({ uri: videoPath });

            await save(result?.video as string);
            await uploadFile({
                file: result?.video,
                userId: "1"
            }, '').then((data) => {
                const returnData = data.data;
                myContext.setFilePath(returnData.filePath);
                myContext.setThumbnailPath(returnData.thumbnail);
                navigation.navigate('UploadUI');

            }).catch((err) => {
            });
            // 편집된 비디오의 결과를 처리하거나 저장하는 로직은 여기에 추가

        } catch (error) {
            console.log(error);
            Alert.alert("Error", "There was an error opening the video editor.");
        }
    };

    if (isPreview && videoPath) {
        return (
            <View style={{ flex: 1 }}>
                <Video
                    source={{ uri: videoPath }}
                    style={StyleSheet.absoluteFill}
                    controls={false}
                    resizeMode="cover"
                    repeat={false}
                    muted={isBGM}
                />
                <PreviewDelBtn />
                <Button title="Edit Video" onPress={openVideoEditor} />
            </View>
        );
    }

    return null;
}

const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between'
    },
    webview: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight,
    },

});

export default PreviewScreen;
