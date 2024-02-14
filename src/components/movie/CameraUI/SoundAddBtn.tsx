import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { useCameraUI } from '../../../contexts/CameraUIContext';


const MusicIcon = () => (
    <Svg width="22" height="23" viewBox="0 0 22 23" stroke="none" fill="#ffffff" style={{
        marginRight: 5,
    }}>
        <Path d="M17.12,0c-1.76,0-3.19,1.43-3.19,3.19c0,0.01,0,0.02,0,0.04l-8.54,1.4c-0.23,0.04-0.4,0.24-0.4,0.47v10.75c-0.55-0.51-1.26-0.79-2.01-0.79C1.33,15.06,0,16.39,0,18.03C0,19.67,1.33,21,2.97,21c1.64,0,2.97-1.33,2.97-2.97V9.75L16.64,8v5.94c-0.55-0.51-1.26-0.79-2.01-0.79c-1.64,0-2.97,1.33-2.97,2.97c0,1.64,1.33,2.97,2.97,2.97c1.64,0,2.97-1.33,2.97-2.97V6.35c1.55-0.23,2.71-1.58,2.71-3.15C20.32,1.43,18.88,0,17.12,0z M18.23,3.68H17.6V4.3c0,0.26-0.21,0.48-0.48,0.48c-0.26,0-0.48-0.21-0.48-0.48V3.68h-0.63c-0.26,0-0.48-0.21-0.48-0.48c0-0.26,0.21-0.48,0.48-0.48h0.63V2.1c0-0.26,0.21-0.48,0.48-0.48c0.26,0,0.48,0.21,0.48,0.48v0.62h0.63c0.26,0,0.48,0.21,0.48,0.48C18.71,3.46,18.49,3.68,18.23,3.68z" />
    </Svg>
);



const styles = StyleSheet.create({
    soundAdd: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(21, 21, 21, 0.5)',
        borderRadius: 25,
        paddingVertical: 3,
        paddingHorizontal: 20,
        width: 130,
        height: 40,
    },
    text: {
        color: '#ffffff',
        fontSize: 13, // 1.2rem을 약 18로 변환, 실제 표시 크기는 디바이스에 따라 다를 수 있음
    },
});



const SoundAddBtn = () => {
    const { isBGM, setIsBGM, isRecording, setIsRecording, iSound, isSoundName } = useCameraUI();
    const navigation = useNavigation();

    const AddBGM = () => {
        if (isBGM) {
            setIsBGM(false);
        } else {
            navigation.navigate('SelectMusicUI');
            //setIsBGM(true);
        }
    };

    // isSoundName이 5자 이상일 경우 뒷 글자를 ...으로 표시
    const displaySoundName = isSoundName.length > 5 ? `${isSoundName.substring(0, 5)}...` : isSoundName;

    return (
        <TouchableOpacity style={[styles.soundAdd, {
            position: 'absolute',
            top: 35,
            alignSelf: 'center',
            pointerEvents: isRecording ? 'none' : 'auto'
        }]}
            onPress={AddBGM}>
            <MusicIcon />
            {isBGM ? (
                <Text style={styles.text}>{displaySoundName}</Text>
            ) : (
                <Text style={styles.text}>사운드 추가</Text>
            )}
        </TouchableOpacity>
    );
};


export default SoundAddBtn;