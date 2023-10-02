import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';  // Text와 View 컴포넌트를 추가로 불러옵니다.

const App = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef(null);
  const [imageData, setImageData] = useState('');
  const [takePhotoClicked, setTakePhotoClicked] = useState(false);

  useEffect(() => {
    checkPermission();
  }, []);
  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();

    console.log(newCameraPermission);
  };
  if (device == null) return <ActivityIndicator />;

  const takePicture = async() => {
    const photo = await camera.current.takePhoto();
    setImageData(photo.path);
    setTakePhotoClicked(false);
    console.log(photo.path);
  };
  return (
    <View style={{flex:1}}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo 
        video={true}
        audio={true}
        />
      <TouchableOpacity 
        style=
        {
          {
          width:60,
          height:60,
          borderRadius:30,
          backgroundColor:'#FF0037',
          position: 'absolute',
          bottom: 50,
          alignSelf:'center',
          }
        }
        onPress= {() => {
          takePicture();
        }} />
    </View>
  );
}

export default App;