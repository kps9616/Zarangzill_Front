import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet, Text, Modal, Alert, Animated } from "react-native";
import PlayTimeSelect from "./SelectMusicUI/PlayTimeSelect";
import { useCameraUI } from "../../../android/app/src/contexts/CameraUIContext";

const ModalUI = ({ isModalVisible, setModalVisible, isModalName, }) => {
    const [isModalRendered, setModalRendered] = useState(false);
    const { resetSound } = useCameraUI();
    const fadeAni = useRef(new Animated.Value(isModalVisible ? 0 : 1)).current;

    const animateFade = () => {
        Animated.timing(fadeAni, {
            toValue: isModalVisible ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            if (!isModalVisible) {
                setModalRendered(false);
            }
        });
    };

    useEffect(() => {
        if (isModalVisible) {
            setModalRendered(true); // Modal을 표시하기 전에 Animated.View를 렌더링합니다.
            animateFade();
        } else {
            animateFade();
            //Alert.alert('실행은됨')
        }
    }, [isModalVisible]);

    useEffect(() => {
        //Alert.alert(String(isModalVisible))
    }, [isModalVisible])




    return (
        <>
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                {isModalName === 'PlayTimeSelect' && (<PlayTimeSelect isModalVisible={isModalVisible} />)}
            </Modal>


            {isModalRendered && (
                <Animated.View style={[styles.backModal, { opacity: fadeAni }]} />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    backModal: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.4)',
        justifyContent: 'flex-end',
    },
});

export default ModalUI;
