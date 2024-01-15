import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCameraUI } from '../../../../android/app/src/contexts/CameraUIContext';
import Svg, { Polyline } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const CheckIcon = () => (
    <Svg width="30" height="30" viewBox="0 0 20 20">
        <Polyline fill="none" stroke="#000" strokeWidth="1.1" points="4,10 8,15 17,4" />
    </Svg>
);

const styles = StyleSheet.create({
    vRecCheck: {
        backgroundColor: 'rgba(21, 21, 21, 0.5)',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 30, // React Native에서는 퍼센트를 사용할 수 없기 때문에, 100%는 width/height의 절반으로 표현됩니다.
    },
    vRecCheckOn: {
        color: '#151515',
        backgroundColor: '#FFFFFF',
    },
});


const PreviewBtn = () => {
    const navigation = useNavigation();
    const { isPreview, setIsPreview } = useCameraUI();

    const isOn = true; // 이 값은 상태에 따라 결정됩니다.
    const onPress = () => {
        navigation.navigate('EditUI');
        setIsPreview(!isPreview);
    };


    return (
        <TouchableOpacity style={[styles.vRecCheck, isOn && styles.vRecCheckOn,
        {
            position: 'absolute',
            bottom: 60,
            right: 30,
            alignSelf: 'center',
        }
        ]} onPress={onPress}>
            <CheckIcon />
        </TouchableOpacity>
    );
};

export default PreviewBtn;