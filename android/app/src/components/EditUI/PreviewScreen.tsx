import React, { useContext } from 'react';
import { useCameraUI } from '../../contexts/CameraUIContext';
import { Alert, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Video from 'react-native-video';
import PreviewDelBtn from './PreviewDelBtn';
import { VESDK } from "react-native-videoeditorsdk";

const PreviewScreen = () => {
    const { videoPath, isPreview } = useCameraUI();

    // 비디오를 편집기로 불러오는 함수
    const openVideoEditor = async () => {
        if (!videoPath) return; // 비디오 경로가 없으면 함수 종료

        try {
            const result = await VESDK.openEditor({ uri: videoPath });

            // 편집된 비디오의 결과를 처리하거나 저장하는 로직 추가

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
                    controls={true}
                    resizeMode="cover"
                />
                <PreviewDelBtn />
                <Button title="Edit Video" onPress={openVideoEditor} />
            </View>
        );
    }

    return null;
}

export default PreviewScreen;
