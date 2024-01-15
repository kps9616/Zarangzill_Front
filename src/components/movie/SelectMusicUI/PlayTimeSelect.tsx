// PlayTimeSelect.tsx
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AudioWave from "./AudioWave";
import CheckBtn from "../CameraUI/CheckBtn";
import { useCameraUI } from "../../../../android/app/src/contexts/CameraUIContext";
import Sound from "react-native-sound";
import { useNavigation } from '@react-navigation/native';
import SoundPlayBar from "./SoundPlayBar";

interface Props {
    onClose: () => void;
}

const PlayTimeSelect: React.FC<Props> = ({ isModalVisible }) => {
    const { isSoundName, isSoundSrc, isSoundTime, iSound, setIsSoundTime, setiSound, resetSound, setIsBGM } = useCameraUI();
    const navigation = useNavigation();

    useEffect(() => {
        if (isModalVisible) {
            iSound?.play();
        }

        return () => {
            iSound?.stop();
            //클린업함수실행
        };
    }, [isModalVisible])

    const goCameraUI = () => {
        setIsBGM(true);
        navigation.navigate('CameraUI')
    }

    return (
        <View style={styles.bModal}>
            <View style={styles.bottomModal}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.closeButton}>
                    </TouchableOpacity>
                    <Text style={styles.title}>구간편집</Text>
                    <TouchableOpacity onPress={goCameraUI}>
                        <CheckBtn />
                    </TouchableOpacity>

                </View>
                <View style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: 100,
                    padding: 20,
                }}>
                    <Text style={{ color: '#000000', fontSize: 23, alignSelf: 'center', bottom: 30, right: 10, }}>🎵 {isSoundName}</Text>
                    <AudioWave />
                    <SoundPlayBar />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bModal: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        //backgroundColor: 'rgba(0,0,0,.4)',
        justifyContent: 'flex-end',
    },
    bottomModal: {
        height: 350,  // 높이는 350으로 지정되어 있습니다.
        backgroundColor: '#fefefe',
        borderTopLeftRadius: 20,  // top-radius 적용
        borderTopRightRadius: 20, // top-radius 적용
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: '#cbcbcb'
    },
    closeButton: {
        position: 'absolute',
        top: 15,
        right: 20,
    },
    title: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default PlayTimeSelect;
