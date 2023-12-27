import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCameraUI } from '../../contexts/CameraUIContext';
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
        borderRadius: 30,
    },
    vRecCheckOn: {
        color: '#151515',
        backgroundColor: '#FFFFFF',
    },
});


const PreviewBtn = () => {
    const navigation = useNavigation();
    const { isPreview, setIsPreview } = useCameraUI();

    const isOn = true;
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