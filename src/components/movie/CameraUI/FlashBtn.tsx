import React, { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useCameraUI } from '../../../contexts/CameraUIContext'



const FlashIcon = ({ isFlash }) => (
    <Svg width="25" height="45" viewBox="0 0 28 53" fill={isFlash === 'ON' ? '#ffffff' : '#ffffffa6'}  >
        <Path d="M24.72,0.45L3.55,18.11c-0.91,0.76-1.16,2.19-0.52,3.02l7.58,10.01c0.47,0.63,0.47,1.62-0.01,2.42L0.38,50.55 c-1.17,1.94,0.58,3.92,2.21,2.5l24.48-21.5c0.89-0.78,1.11-2.21,0.46-3.02l-7.98-9.95c-0.48-0.6-0.5-1.58-0.05-2.39l7.44-13.27 C28,1,26.32-0.88,24.72,0.45z" />
    </Svg>
);


const FlashBtn = () => {
    const { isFlash, setIsFlash } = useCameraUI();

    const toggleFlash = () => {
        if (isFlash === 'OFF') {
            setIsFlash('ON');
        } else if (isFlash === 'ON') {
            setIsFlash('OFF');
        } else {
            Alert.alert('플래시를 찾을 수 없습니다.')
        }
    };

    return (
        <TouchableOpacity onPress={toggleFlash} style={
            {
                position: 'absolute',
                top: 100,
                right: 21,
                alignSelf: 'center',
            }
        } >
            <FlashIcon isFlash={isFlash} />
        </TouchableOpacity>
    );
};

export default FlashBtn;