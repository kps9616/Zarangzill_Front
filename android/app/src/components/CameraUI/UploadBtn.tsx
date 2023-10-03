import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const UploadIcon = () => (
    <Svg width="40" height="32" viewBox="0 0 38 32" fill="#ffffff">
        <Path d="M37.39,11.63c-0.55-0.69-1.37-1.09-2.25-1.09H34.1v-3.6c0-1.68-1.36-3.04-3.05-3.04h-16.5 c-0.57,0-1.03-0.46-1.03-1.03V2.84c0-1.57-1.28-2.84-2.85-2.84H2.85C1.28,0,0,1.27,0,2.84v26.33l0,0c0,0.6,0.19,1.19,0.56,1.68C1.09,31.57,1.95,32,2.86,32H31.2c1.31,0,2.45-0.89,2.77-2.16l3.94-15.77C38.13,13.21,37.94,12.32,37.39,11.63z M26.71,22.81l-5.14-0.01l-0.74,4.95l-2.57,0L19,22.8l-5.11-0.01l0.37-2.49l5.11,0.01l0.74-4.95l2.57,0l-0.74,4.95l5.14,0.01L26.71,22.81zM32.4,10.54H7.73c-1.26,0-2.36,0.81-2.73,2.01L1.7,23.24V2.84c0-0.64,0.52-1.15,1.16-1.15h7.81c0.64,0,1.16,0.52,1.16,1.15v0.03c0,1.5,1.22,2.72,2.73,2.72h16.5c0.75,0,1.36,0.61,1.36,1.35V10.54z" />
    </Svg>
);

const UploadBtn = () => {
    const onPress = () => {
        // 버튼이 클릭되었을 때의 동작을 여기에 작성
        // 업로드 페이지 작성 후 네비게이션 연결 예정입니다.
    };

    return (
        <TouchableOpacity onPress={onPress} style={{
            position: 'absolute',
            bottom: 50,
            left: 50,
            alignSelf: 'center',
        }} >
            <UploadIcon />
            <Text style={{
                color: '#ffffff',
                fontSize: 13,
                top: 5,
            }}>업로드</Text>
        </TouchableOpacity>
    );
};

export default UploadBtn;



