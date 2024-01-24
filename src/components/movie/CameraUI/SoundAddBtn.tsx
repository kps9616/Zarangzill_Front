import React, { useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Animated } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useCameraUI } from '../../../../android/app/src/contexts/CameraUIContext';
import { useNavigation } from '@react-navigation/native';

const MusicIcon = () => (
    <Svg width="22" height="23" viewBox="0 0 22 23" stroke="none" fill="#ffffff" style={{
        marginRight: 5,
    }}>
        <Path d="M17.12,0c-1.76,0-3.19,1.43-3.19,3.19c0,0.01,0,0.02,0,0.04l-8.54,1.4c-0.23,0.04-0.4,0.24-0.4,0.47v10.75c-0.55-0.51-1.26-0.79-2.01-0.79C1.33,15.06,0,16.39,0,18.03C0,19.67,1.33,21,2.97,21c1.64,0,2.97-1.33,2.97-2.97V9.75L16.64,8v5.94c-0.55-0.51-1.26-0.79-2.01-0.79c-1.64,0-2.97,1.33-2.97,2.97c0,1.64,1.33,2.97,2.97,2.97c1.64,0,2.97-1.33,2.97-2.97V6.35c1.55-0.23,2.71-1.58,2.71-3.15C20.32,1.43,18.88,0,17.12,0z M18.23,3.68H17.6V4.3c0,0.26-0.21,0.48-0.48,0.48c-0.26,0-0.48-0.21-0.48-0.48V3.68h-0.63c-0.26,0-0.48-0.21-0.48-0.48c0-0.26,0.21-0.48,0.48-0.48h0.63V2.1c0-0.26,0.21-0.48,0.48-0.48c0.26,0,0.48,0.21,0.48,0.48v0.62h0.63c0.26,0,0.48,0.21,0.48,0.48C18.71,3.46,18.49,3.68,18.23,3.68z" />
    </Svg>
);

const SoundAddBtn = () => {
    const { isBGM, isSoundName, isRecording, setIsBGM } = useCameraUI();
    const navigation = useNavigation();
    const moveAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isSoundName.length > 6) {
            const animation = Animated.loop(
                Animated.timing(moveAnim, {
                    toValue: -100, // 조절하여 애니메이션 범위를 설정하세요.
                    duration: 8000, // 애니메이션 속도
                    useNativeDriver: true,
                })
            );

            animation.start();
            return () => animation.stop();
        }
    }, [isSoundName]);

    const AddBGM = () => {
        if (isBGM) {
            setIsBGM(false);
        } else {
            navigation.navigate('SelectMusicUI')
        }
    };

    return (
        <TouchableOpacity style={[styles.soundAdd, {
            position: 'absolute',
            top: 35,
            alignSelf: 'center',
            pointerEvents: isRecording ? 'none' : 'auto',
            overflow: 'hidden',
        }]}
            onPress={AddBGM}>
            <MusicIcon />
            <View style={styles.textContainer}>
                <Animated.Text
                    style={[styles.text, {
                        transform: [{ translateX: moveAnim }]
                    }]}
                    numberOfLines={1} // 한 줄만 표시
                    ellipsizeMode='clip'
                >
                    {isBGM ? isSoundName : '사운드 추가'}
                </Animated.Text>
            </View>
        </TouchableOpacity>
    );
};

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
    textContainer: {
        overflow: 'hidden', // 넘치는 텍스트 숨김
        width: 100, // 텍스트 컨테이너의 너비를 조절하여 텍스트가 잘리는 지점 설정
    },
    text: {
        color: '#ffffff',
        fontSize: 13,
    },
});

export default SoundAddBtn;