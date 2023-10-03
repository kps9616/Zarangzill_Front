import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCameraUI } from '../../contexts/CameraUIContext';
import Svg, { Polyline } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const CheckIcon = () => (
    <Svg width="30" height="30" viewBox="0 0 20 20">
        <Polyline fill="none" stroke="#ffffff" strokeWidth="1.6" points="4,10 8,15 17,4" />
    </Svg>
);

const styles = StyleSheet.create({
    vCheck: {
        backgroundColor: 'rgba(17, 30, 43, 0.537)',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 30,
        borderRadius: 10,
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