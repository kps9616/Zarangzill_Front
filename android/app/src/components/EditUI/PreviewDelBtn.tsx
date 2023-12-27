import React from 'react';
import { useCameraUI } from '../../contexts/CameraUIContext';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const DeleteIcon = () => (
    <Svg width="30" height="30" viewBox="0 0 20 20">
        <Path fill="none" stroke="#ffffffb8" strokeWidth="0.8" d="M16,16 L4,4" />
        <Path fill="none" stroke="#ffffffb8" strokeWidth="0.8" d="M16,4 L4,16" />
    </Svg>
);

const styles = StyleSheet.create({
    vDel: {
        backgroundColor: 'rgba(21, 21, 21, 0.5)',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 30,
    },
});


const PreviewDelBtn = () => {
    const { isPreview, setIsPreview, resetState } = useCameraUI(); // 비디오 미리보기 모드인지 여부를 나타내는 상태입니다.
    const navigation = useNavigation();
    const PreviewDelFnc = () => {
        Alert.alert(
            "편집창 닫기",
            "창을 닫을 경우 영상은 삭제됩니다.",
            [
                { text: "아니오" },
                {
                    text: "예", onPress: () => {
                        resetState();
                        navigation.navigate('CameraUI');
                    }
                }
            ]
        );
    }

    return (
        <TouchableOpacity
            style={[styles.vDel, {
                position: 'absolute',
                left: 14,
                top: 35,
            }]}
            onPress={PreviewDelFnc}>
            <DeleteIcon />
        </TouchableOpacity>
    );

}


export default PreviewDelBtn;




