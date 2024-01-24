import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useCameraUI } from '../../../../android/app/src/contexts/CameraUIContext';

const AudioWave = () => {
    const { isTimer, isSoundTime, iSound, isPlayTimeBGM, setIsPlayTimeBGM } = useCameraUI();

    // isTimer 값에 따라 boxWidth와 paddingLeft, paddingRight를 조절
    const boxWidth = (3 + 2) * isTimer;
    const paddingValue = isTimer === 60 ? 35 : 110;

    const handleScroll = (event) => {
        const scrollX = event.nativeEvent.contentOffset.x;
        setIsPlayTimeBGM(Math.round(scrollX / (3 + 2)))
        iSound?.setCurrentTime(isPlayTimeBGM);

    };

    return (
        <View style={styles.wrapper}>
            <View style={[styles.timerBox, { width: boxWidth }]} />
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={5}
                contentContainerStyle={{ paddingLeft: paddingValue, paddingRight: paddingValue }}
            >
                <View style={styles.container}>
                    {Array.from({ length: Number(isSoundTime) }).map((_, idx) =>
                        idx % 2 === 0 ? <WaveSVG1 key={idx} /> : <WaveSVG2 key={idx} />
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const WaveSVG1 = () => (
    <Svg width="3" height="30.9" viewBox="0 0 5.14 30.9" style={styles.audioWave}>
        <Path d="m0,2.29C0,1.02,1.15,0,2.57,0s2.57,1.02,2.57,2.29v26.33c0,1.26-1.15,2.29-2.57,2.29s-2.57-1.02-2.57-2.29V2.29h0Z" stroke-width="0" />
    </Svg>
);

const WaveSVG2 = () => (
    <Svg width="3" height="47.55" viewBox="0 0 5.06 47.55" style={styles.audioWave}>
        <Path d="m0,2.56C0,1.14,1.14,0,2.53,0s2.53,1.14,2.53,2.56v42.43c0,1.42-1.14,2.56-2.53,2.56s-2.53-1.14-2.53-2.56V2.56h0Z" stroke-width="0" />
    </Svg>
);


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row', // SVG를 가로로 나열합니다.
        flexWrap: 'nowrap', // 줄바꿈 없이 나열합니다.
        alignItems: 'center',
    },
    audioWave: {
        marginRight: 2, // SVG 요소 간에 간격을 둡니다.
    },
    box: {
        height: 50,  // 높이는 임의로 설정하였습니다.
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff0',
    },
    timerBox: {
        borderColor: 'black',  // 테두리 색깔
        borderWidth: 2,  // 테두리 두께
        position: 'absolute',  // 절대 위치 지정
        alignSelf: 'center',
        zIndex: 1,  // zIndex 값 설정
        top: 0,  // 상단에서 0의 위치에 놓습니다.
        height: 50,  // 부모 높이와 동일하게 합니다.
        backgroundColor: 'rgba(255, 255, 255, 0.5)'  // 반투명한 배경색
    },
    wrapper: {
        flex: 1,
        position: 'relative',  // 이 부모 컴포넌트를 기준으로 TimerBox의 위치를 결정
    },
});

export default AudioWave;
