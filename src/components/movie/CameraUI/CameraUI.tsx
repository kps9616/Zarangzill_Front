import React, { useEffect, useRef, useState } from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { ActivityIndicator, StyleSheet, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CameraUIProvider, useCameraUI } from '../../../contexts/CameraUIContext'
import RecBtn from './RecBtn';
import RecFnc from './RecFnc';
import DeleteBtn from './DeleteBtn';
import ProgressBar from './ProgressBar';
import TimerBtn from './TimerBtn';
import SoundAddBtn from './SoundAddBtn';
import FlashBtn from './FlashBtn';
import SelfCamBtn from './SelfCamBtn';
import UploadBtn from './UploadBtn';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CameraUI = () => {
  const { isSoundTime, isSoundName, isBGM, isRecording, videoPath, isPreview, isVideo, isFlash, isFrontCamera, isTimer } = useCameraUI();
  const devices = useCameraDevices();
  const device = isFrontCamera ? devices.front : devices.back;
  const cameraRef = useRef(null);
  const [isActive, setIsActive] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const focusListener = navigation.addListener('focus', () => {
      setIsActive(true);
    });

    const blurListener = navigation.addListener('blur', () => {
      setIsActive(false);
    });

    return () => {
      // 이벤트 리스너 정리
      navigation.removeListener('focus', focusListener);
      navigation.removeListener('blur', blurListener);
    };
  }, [navigation]);

  /*useEffect(() => {
    Alert.alert(`지금의 상태는 ${isSoundTime} 입니다.`);
  }, [isRecording,]);*/

  useEffect(() => {
    const checkPermission = async () => {
      await Camera.requestCameraPermission();
      await Camera.requestMicrophonePermission();
    };
    checkPermission();
  }, []);

  if (device == null) return <ActivityIndicator />;

  const goSelectUI = () => {
    navigation.navigate('SelectMusicUI');
  }


  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={StyleSheet.absoluteFill} device={device} isActive={isActive} video={true} audio={true} zoom={device.neutralZoom} />
      <RecBtn />
      <RecFnc cameraRef={cameraRef} />
      {!isRecording && <DeleteBtn />}
      <ProgressBar />
      <TimerBtn />
      <SoundAddBtn />
      {!isRecording && <FlashBtn />}
      {!isRecording && <SelfCamBtn />}
      {!isRecording && <UploadBtn />}
    </View>
  );
};

export default CameraUI;
