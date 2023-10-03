import React, { useContext, useEffect } from 'react';
import { useCameraUI } from '../../contexts/CameraUIContext';
import { Alert, View } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { Text } from 'react-native-svg';
import PreviewDelBtn from './PreviewDelBtn';

//비디오 에디터 추가 전 프리뷰 스크린 파일입니다. (백업)

const PreviewScreen = () => {
    const { videoPath } = useCameraUI(); // 녹화된 비디오의 경로
    const { isPreview } = useCameraUI();

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

