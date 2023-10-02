import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { useCameraUI } from '../../contexts/CameraUIContext';

const styles = StyleSheet.create({
    back: {
        backgroundColor: 'rgba(21, 21, 21, 0.5)',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 30, // 100%는 width/height의 절반으로 표현됩니다.
    },
    textColor: {
        color: '#ffffffb8',
        fontSize: 17
    }
});


const TimerBtn = () => {
    const { isTimer, setIsTimer, isRecording } = useCameraUI();
    const toggleTimer = () => {
        if (isTimer === 30) {
            setIsTimer(60)
        } else if (isTimer === 60) {
            setIsTimer(30)
        }
    }

    return (
        <TouchableOpacity
            style={[styles.back, {
                position: 'absolute',
                right: 14,
                top: 35,
                pointerEvents: isRecording ? 'none' : 'auto',
            }]}
            onPress={toggleTimer}>
            {isTimer === 30 && <Text style={styles.textColor}>30</Text>}
            {isTimer === 60 && <Text style={styles.textColor}>60</Text>}
        </TouchableOpacity>
    );
};

export default TimerBtn;