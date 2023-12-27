import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCameraUI } from '../../contexts/CameraUIContext';
import Svg, { Polyline } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const CheckIcon = () => (
    <Svg width="30" height="30" viewBox="0 0 20 20">
        <Polyline fill="none" stroke="#ffffff" strokeWidth="1.1" points="4,10 8,15 17,4" />
    </Svg>
);

const styles = StyleSheet.create({
    vRecCheck: {
        backgroundColor: 'rgb(131, 201, 238)',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 30, // React Native에서는 퍼센트를 사용할 수 없기 때문에, 100%는 width/height의 절반으로 표현됩니다.
    },
    vRecCheckOn: {
        color: '#151515',
        backgroundColor: '#FFFFFF',
    },
});


const BGMCheckBtn = () => {
    const navigation = useNavigation();


    return (
        <View style={[styles.vRecCheck]}>
            <CheckIcon />
        </View>
    );
};

export default BGMCheckBtn;