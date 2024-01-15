import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet, Text, Alert, } from "react-native";
import BGMCheckBtn from "./BGMCheckBtn";
import Sound from "react-native-sound";
import ModalUI from "../ModalUI";
import { useCameraUI } from "../../../../android/app/src/contexts/CameraUIContext";

const MusicList = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [sound, setSound] = useState(null);
    const isModalName = 'PlayTimeSelect';
    const { isSoundName, isSoundSrc, iSound, isSoundTime, setIsSoundName, setIsSoundSrc, setiSound, setIsSoundTime, } = useCameraUI();


    const audioFiles = [
        { id: "1", src: 'https://jin3s.cafe24.com/assets/bgm.mp3', name: "BGM" },
        { id: "2", src: 'https://jin3s.cafe24.com/assets/PerfectGirl.mp3', name: "Perfect Girl" },
        { id: "3", src: 'https://jin3s.cafe24.com/assets/Love_You.mp3', name: "Love You" },
        { id: "4", src: 'https://jin3s.cafe24.com/assets/blunt.mp3', name: "Blunt" },
    ];

    useEffect(() => {
        return () => {
            // 컴포넌트가 언마운트될 때 사운드멈춤
            if (sound) {
                sound.stop();
            }
        };
    }, [sound]);


    const onSelect = (item) => {
        if (sound) {
            if (selectedId === item.id) {
                sound.stop(() => {
                    sound.release();
                    setSound(null);
                    setSelectedId(null);
                });
                return;
            } else {
                sound.release();
            }
        }

        setSelectedId(item.id);

        const newSound = new Sound(item.src, null, (error) => {
            if (error) {
                Alert.alert('Failed to load the sound', error.message);
                return;
            }

            setIsSoundSrc(item.src);
            setIsSoundName(item.name);
            setIsSoundTime(newSound.getDuration());
            setiSound(newSound);

            newSound.play((success) => {
                if (!success) {
                    Alert.alert('Playback failed');
                }
            });
        });

        setSound(newSound);

    };

    const onPlayTime = () => {
        sound.stop();
        setModalVisible(true); // BGMCheckBtn 선택 시 모달을 표시합니다.
        setiSound(sound);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onSelect(item)} style={styles.listItem}>
            <Text style={styles.listItemText}>{item.name}</Text>
            {selectedId === item.id && (
                <TouchableOpacity onPress={onPlayTime}>
                    <BGMCheckBtn />
                </TouchableOpacity>
            )}
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={audioFiles}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <ModalUI isModalVisible={isModalVisible} setModalVisible={setModalVisible} isModalName={isModalName} />
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        padding: 10,
    },
    listItemText: {
        fontSize: 18,
    },
});

export default MusicList;
