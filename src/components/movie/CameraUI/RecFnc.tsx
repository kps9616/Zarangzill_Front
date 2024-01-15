import React, { useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import { useCameraUI } from '../../../../android/app/src/contexts/CameraUIContext';
import { Camera } from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';
import Sound from 'react-native-sound';

const RecFnc: React.FC<RecFncProps> = ({ cameraRef }) => {
  const { isPlayTimeBGM, isRecording, isTimer, setIsRecording, iSound } = useCameraUI();
  const isFirstRender = useRef(true); //렌더링이 처음인지아닌지 확인용
  const { isVideo, isFlash, isBGM, setIsVideo, setVideoPath, setIsPreview } = useCameraUI();
  const navigation = useNavigation();


  const toggleRecording = async () => {
    if (!isFirstRender.current) {
      try {
        if (isRecording) {
          const video = await cameraRef.current?.startRecording({
            flash: isFlash === 'ON' ? 'on' : 'off',
            onRecordingFinished: (video) => {
              setVideoPath(video.path);
            },
            onRecordingError: (error) => console.error(error),
          });

          setTimeout(async () => {
            await cameraRef.current.stopRecording();
            setIsRecording(false);
          }, isTimer * 1000);



        } else {
          await cameraRef.current?.stopRecording();
          setIsVideo(true);
          navigation.navigate('EditUI');
          setIsPreview(true);
        }
      } catch (error) {
        console.error('Error toggling recording', error);
      }
    }
  };


  useEffect(() => {
    if (isRecording) {
      if (isBGM) {
        iSound?.setCurrentTime(isPlayTimeBGM);
        iSound?.play();
      }

    }

    toggleRecording();
    // 첫 렌더링이 아니라는 것을 표시
    isFirstRender.current = false;

    return () => {
      iSound?.stop();
      //클린업함수실행
    };
  }, [isRecording]);

  return null;
};

export default RecFnc;
