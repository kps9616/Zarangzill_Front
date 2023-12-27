import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useCameraUI } from '../../contexts/CameraUIContext';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const { isTimer, isRecording } = useCameraUI();

    useEffect(() => {
        if (isRecording && isTimer > 0) {
            // isTimer의 값에 따라 interval 간격과 증가량을 조절
            const intervalDuration = 1000 // 1초마다 setInterval 실행
            const increment = isTimer / 100; // 전체 프로그레스를 isTimer의 100분의 1로 나눕니다.

            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return prev + (100 / isTimer); // increment만큼 증가시킵니다.
                });
            }, intervalDuration); // intervalDuration 간격으로 실행합니다.

            // 클린업 함수를 반환합니다.
            return () => clearInterval(interval);
        } else if (!isRecording) {
            setProgress(0); //녹화상태가 아니면 프로그레스 초기화
        }
    }, [isRecording, isTimer]);

    return (
        <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    progressBarContainer: {
        height: 9,
        borderRadius: 500,
        backgroundColor: '#f8f8f8',
        marginBottom: 20,
        overflow: 'hidden',
        top: 15,
        width: '93%',
        alignSelf: 'center',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#c62d1f',
    },
});

export default ProgressBar;
