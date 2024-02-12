import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useCameraUI } from '../../../contexts/CameraUIContext';

const styles = StyleSheet.create({
  recBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: '#ffffff',
    borderWidth: 1,
    width: 70,
    height: 70,
  },
  recBtn1: {
    backgroundColor: '#c62d1f',
    borderRadius: 7,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#8a2a2194",
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  recBtn2: {
    backgroundColor: "#DE3838",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RecBtn = () => {
  const { isRecording, setIsRecording } = useCameraUI();
  const borderRadiusValue = useRef(new Animated.Value(isRecording ? 10 : 25)).current;
  const borderColorValue = borderRadiusValue.interpolate({
    inputRange: [10, 25],
    outputRange: ['#DE3838', '#FFFFFF']
  });
  const scaleValue = useRef(new Animated.Value(isRecording ? 1.2 : 1)).current; // Scale Animated Value

  useEffect(() => {
    Animated.parallel([ // 여러 애니메이션을 동시에 실행
      Animated.timing(borderRadiusValue, {
        toValue: isRecording ? 10 : 25,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(scaleValue, {
        toValue: isRecording ? 1.2 : 1, // Scale이 커짐
        duration: 200,
        useNativeDriver: true, // Scale 변화는 Native Driver를 사용 가능
      }),
    ]).start();
  }, [isRecording]);

  const animatedStyle = {
    borderRadius: borderRadiusValue,
    borderColor: borderColorValue,
  };

  const scaleStyle = {
    transform: [{ scale: scaleValue }] // Scale 스타일 적용
  };

  return (
    <TouchableOpacity
      onPress={() => {
        if (!isRecording) {
          setIsRecording(!isRecording);
        }
      }}
      style={{
        position: 'absolute',
        bottom: 60,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      disabled={isRecording}
    >
      <Animated.View style={[styles.recBtn2, animatedStyle]}>
        <Animated.View style={[styles.recBtnContainer, scaleStyle]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default RecBtn;
