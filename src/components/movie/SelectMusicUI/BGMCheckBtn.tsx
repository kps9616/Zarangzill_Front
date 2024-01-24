import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCameraUI } from '../../../../android/app/src/contexts/CameraUIContext';
import Svg, { Polyline } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const CheckIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 20 20">
        <Polyline fill="none" stroke="#202020" strokeWidth="1.1" points="4,10 8,15 17,4" />
    </Svg>
);

const styles = StyleSheet.create({
    vRecCheck: {
        backgroundColor: 'rgba(148, 148, 148, 0)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderColor: '#202020',
        borderWidth: 1,
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