import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCameraUI } from '../../../../android/app/src/contexts/CameraUIContext';
import Svg, { Polyline } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const CheckIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 20 20">
        <Polyline fill="none" stroke="#202020" strokeWidth="1.6" points="4,10 8,15 17,4" />
    </Svg>
);

const styles = StyleSheet.create({
    vCheck: {
        backgroundColor: 'rgba(17, 30, 43, 0)',
        borderWidth: 1.5,
        borderColor: '#202020',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 30,
        borderRadius: 10, // React Native에서는 퍼센트를 사용할 수 없기 때문에, 100%는 width/height의 절반으로 표현됩니다.
    },
    vRecCheckOn: {
        color: '#151515',
        backgroundColor: '#FFFFFF',
    },
});


const CheckBtn = () => {
    const navigation = useNavigation();


    return (
        <View style={[styles.vCheck]}>
            <CheckIcon />
        </View>
    );
};

export default CheckBtn;