import React, { useContext, useEffect } from 'react';
import { useCameraUI } from '../../contexts/CameraUIContext';
import { Alert, View } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { Text } from 'react-native-svg';
import PreviewDelBtn from './PreviewDelBtn';



const PreviewScreen = () => {
    const { videoPath } = useCameraUI(); // 녹화된 비디오의 경로를 저장하는 상태입니다.
    const { isPreview } = useCameraUI(); // 비디오 미리보기 모드인지 여부를 나타내는 상태입니다.

    if (isPreview) {
        if (videoPath) {
            return (
                <View style={{ flex: 1 }}>
                    <Video
                        source={{ uri: videoPath }}
                        style={StyleSheet.absoluteFill}
                        controls={true}
                        resizeMode="cover"
                    />
                    <PreviewDelBtn />
                </View>
            );
        } else {
            return null;
        }

    } else {
        return null;
    }
}



export default PreviewScreen;

