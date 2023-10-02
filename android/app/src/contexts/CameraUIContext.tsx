import React, { createContext, useContext, useState, } from 'react';
import Sound = require('react-native-sound');
// 상태의 타입을 정의합니다.
interface CameraUIState {
  isRecording: boolean;
  videoPath: string;
  isPreview: boolean;
  isVideo: boolean;
  isFlash: string;
  isFrontCamera: boolean;
  isTimer: number;
  isBGM: boolean;
  isSoundName: string;
  isSoundSrc: string;
  isPlayTimeBGM: number;
  iSound: Sound | null;
  isSoundTime: number; //음원의 시간을 초단위로 가져옵니다
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;
  setVideoPath: React.Dispatch<React.SetStateAction<string>>;
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVideo: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFlash: React.Dispatch<React.SetStateAction<string>>;
  resetState: () => void;
  resetSound: () => void;
  toggleFrontCamera: () => void;
  setIsTimer: React.Dispatch<React.SetStateAction<number>>;
  setIsBGM: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSoundName: React.Dispatch<React.SetStateAction<string>>;
  setIsSoundSrc: React.Dispatch<React.SetStateAction<string>>;
  setIsPlayTimeBGM: React.Dispatch<React.SetStateAction<number>>;
  setiSound: React.Dispatch<React.SetStateAction<Sound | null>>;
  setIsSoundTime: React.Dispatch<React.SetStateAction<number>>;
}


// 상태의 초깃값을 정의합니다.
const initialState = {
  videoPath: '',
  isRecording: false,
  isPreview: false,
  isVideo: false,
  isFlash: 'OFF',
  isFrontCamera: false,
  isTimer: 30,
  isBGM: false,
  isSoundName: '',
  isSoundSrc: '',
  isPlayTimeBGM: 0,
  iSound: null,
  isSoundTime: 0,
}

// Context를 생성합니다.
const CameraUIContext = createContext<CameraUIState | undefined>(undefined);

// Provider 컴포넌트를 정의합니다.
export const CameraUIProvider: React.FC = ({ children }) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [videoPath, setVideoPath] = useState<string>('');
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [isVideo, setIsVideo] = useState<boolean>(false);
  const [isFlash, setIsFlash] = useState<string>('OFF');
  const [isFrontCamera, setIsFrontCamera] = useState<boolean>(false);
  const [isTimer, setIsTimer] = useState<number>(30);
  const [isBGM, setIsBGM] = useState<boolean>(false);
  const [isSoundName, setIsSoundName] = useState<string>('');
  const [isSoundSrc, setIsSoundSrc] = useState<string>('');
  const [isPlayTimeBGM, setIsPlayTimeBGM] = useState<number>(0);
  const [iSound, setiSound] = useState<Sound | null>(null);
  const [isSoundTime, setIsSoundTime] = useState<number>(0);

  const toggleFrontCamera = () => {
    setIsFrontCamera(prev => !prev);
  };

  const resetState = () => {
    setIsRecording(initialState.isRecording);
    setVideoPath(initialState.videoPath);
    setIsPreview(initialState.isPreview);
    setIsVideo(initialState.isVideo);
    //setIsFlash(initialState.isFlash);
    //setIsFrontCamera(initialState.isFrontCamera);
    //setIsTimer(initialState.isTimer);
    //setIsBGM(initialState.isBGM);
  }

  const resetSound = () => {
    setIsSoundName(initialState.isSoundName);
    setIsSoundSrc(initialState.isSoundSrc);
    setIsPlayTimeBGM(initialState.isPlayTimeBGM);
    setiSound(initialState.iSound);
    setIsBGM(initialState.isBGM);
    setIsSoundTime(initialState.isSoundTime);
  }


  return (
    <CameraUIContext.Provider value={{
      isRecording,
      videoPath,
      isPreview,
      isVideo,
      isFlash,
      isFrontCamera,
      isTimer,
      isBGM,
      isSoundName,
      isSoundSrc,
      isPlayTimeBGM,
      iSound,
      isSoundTime,
      setIsRecording,
      setVideoPath,
      setIsPreview,
      setIsVideo,
      setIsFlash,
      resetState,
      resetSound,
      toggleFrontCamera,
      setIsTimer,
      setIsBGM,
      setIsSoundName,
      setIsSoundSrc,
      setIsPlayTimeBGM,
      setiSound,
      setIsSoundTime,
    }}>
      {children}
    </CameraUIContext.Provider>
  );
};

// Custom Hook을 정의하여, 컴포넌트에서 쉽게 Context를 사용할 수 있게 합니다.
export const useCameraUI = () => {
  const context = useContext(CameraUIContext);
  if (context === undefined) {
    throw new Error('useCameraUI must be used within a CameraUIProvider');
  }
  return context;
};
