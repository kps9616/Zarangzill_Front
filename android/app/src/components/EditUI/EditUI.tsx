import React, { useEffect, useRef } from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { ActivityIndicator, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import PreviewScreen from './PreviewScreen';

const EditUI = () => {

    return (
        <View style={{ flex: 1 }}>
            <PreviewScreen />
        </View>
    );
};

export default EditUI;
