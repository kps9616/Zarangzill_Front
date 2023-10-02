import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AudioWave from "./AudioWave";
import { useCameraUI } from "../../contexts/CameraUIContext";
import Sound from "react-native-sound";
import { useNavigation } from '@react-navigation/native';
import Slider from "@react-native-community/slider";


const SoundPlayBar = () => {
    const { isTimer, isSoundName, isSoundSrc, isSoundTime, iSound, setIsSoundTime, setiSound, resetSound, setIsBGM } = useCameraUI();
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (iSound) {
            iSound.getCurrentTime((seconds) => {
                setCurrentTime(seconds);
            });
        }
    }, [iSound]);

    const handleSliderChange = (value) => {
        iSound?.setCurrentTime(value);
        setCurrentTime(value);
    }

    const convertSecondsToMinutes = () => {
        const min = Math.floor(isSoundTime / 60);
        const sec = Math.round(isSoundTime % 60); // 소수점 반올림표시

        return `${min}:${sec < 10 ? '0' : ''}${sec}`; // '0'을 추가하여 초가 한 자리수일 때 '05'와 같이 출력되도록 함
    }

    return (
        <>
            <View style={{ flexDirection: 'row', position: 'absolute', alignSelf: 'center', bottom: 0 }}>
                <Text style={{ marginRight: 320 }}>{convertSecondsToMinutes(currentTime)}</Text>
                <Text>{convertSecondsToMinutes(isSoundTime)}</Text>

            </View>
            <Slider
                style={{ flex: 1, marginRight: 10, }}
                maximumValue={isSoundTime - isTimer}
                value={currentTime}
                onValueChange={handleSliderChange}
            />

        </>
    );
};

const styles = StyleSheet.create({
    bModal: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        //backgroundColor: 'rgba(0,0,0,.4)',
        justifyContent: 'flex-end',
    },
});

export default SoundPlayBar;
