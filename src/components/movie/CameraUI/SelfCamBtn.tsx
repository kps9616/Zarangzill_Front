import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useCameraUI } from '../../../contexts/CameraUIContext';

const SelfIcon = () => (
    <Svg width="37" height="32" viewBox="0 0 40 34" fill="#ffffffa6">
        <Path d="M20.01,34c-3.92,0-7.7-1.48-10.65-4.16c-0.52-0.47-0.57-1.3-0.12-1.84c0.45-0.55,1.24-0.6,1.76-0.13c2.5,2.27,5.7,3.52,9.01,3.52c7.58,0,13.75-6.46,13.75-14.39c0-1.58-0.07-2.53-0.52-3.93c-0.22-0.68,0.14-1.42,0.79-1.65c0.65-0.24,1.36,0.14,1.57,0.83c0.55,1.72,0.64,2.96,0.64,4.75C36.25,26.37,28.97,34,20.01,34z" />
        <Path d="M5.47,22.15c-0.56,0-1.07-0.39-1.21-0.99C3.94,19.81,3.77,18.41,3.77,17c0-9.38,7.28-17,16.24-17c3.95,0,7.76,1.5,10.73,4.24c0.52,0.48,0.57,1.3,0.11,1.84c-0.45,0.54-1.24,0.59-1.76,0.12c-2.51-2.31-5.74-3.59-9.08-3.59C12.43,2.61,6.26,9.06,6.26,17c0,1.2,0.14,2.38,0.42,3.53c0.17,0.7-0.24,1.41-0.9,1.58C5.67,22.14,5.57,22.15,5.47,22.15z" />
        <Path d="M5.17,24.97l4.83-7.69C10.08,17.16,9.99,17,9.85,17H0.18c-0.14,0-0.23,0.6-0.15,0.28l4.83,7.69C4.93,25.08,5.1,25.08,5.17,24.97z" />
        <Path d="M34.85,9.03l-4.83,7.69C29.94,16.84,30.03,17,30.17,17h9.67c0.14,0,0.23-0.16,0.15-0.28l-4.83-7.69C35.09,8.92,34.92,8.92,34.85,9.03z" />
    </Svg>
);

const SelfCamBtn = () => {
    const { toggleFrontCamera } = useCameraUI();

    return (
        <TouchableOpacity onPress={toggleFrontCamera} style={
            {
                position: 'absolute',
                top: 180,
                right: 14,
                alignSelf: 'center',
            }
        } >
            <SelfIcon />
        </TouchableOpacity>
    );
};

export default SelfCamBtn;
