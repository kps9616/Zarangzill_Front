import React, { useContext, useEffect } from 'react';
import { useCameraUI } from '../../../contexts/CameraUIContext';
import { Alert, View } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { Text } from 'react-native-svg';

const PreviewFnc = () => {
    const { videoPath, setVideoPath } = useCameraUI(); // 녹화된 비디오의 경로를 저장하는 상태입니다.
    const { isPreview, setIsPreview } = useCameraUI(); // 비디오 미리보기 모드인지 여부를 나타내는 상태입니다.

    if (isPreview == false) {
        return (
            <>
                <Video
                    source={{ uri: videoPath }}
                    style={StyleSheet.absoluteFill}
                    controls={true}
                    resizeMode="cover"
                />
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        bottom: 50,
                        alignSelf: 'center',
                        padding: 10,
                        backgroundColor: 'black',
                        borderRadius: 5,
                    }}
                    onPress={() => setIsPreview(false)}
                >
                    <Text style={{ color: 'white' }}>뒤로가기</Text>
                </TouchableOpacity>
            </>

        );
    } else {
        return (
            null
        )
    }

    useEffect(() => {

    }, [])
};


export default PreviewFnc;

