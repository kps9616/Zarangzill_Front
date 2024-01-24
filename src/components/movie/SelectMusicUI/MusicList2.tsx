import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { Circle, Polygon, Svg } from 'react-native-svg';
import TogglePlayBtn from './TogglePlayBtn';
import Sound from 'react-native-sound';
import { useCameraUI } from '../../../../android/app/src/contexts/CameraUIContext';
import ModalUI from '../ModalUI';

const MusicList2 = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [sound, setSound] = useState(null);
    const isModalName = 'PlayTimeSelect';
    const { isSoundName, isSoundSrc, iSound, isSoundTime, setIsSoundName, setIsSoundSrc, setiSound, setIsSoundTime, } = useCameraUI();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        return () => {
            if (sound) {
                sound.release();
            }
        };
    }, [sound]); // 사운드 언마운트 시 릴리즈


    const DATA = [
        {
            id: '1',
            name: "나를 잊지 말아요",
            title: '나를 잊지 말아요',
            subtitle: '바이브',
            time: '2:50',
            avatar: require('../../../images/profile.png'), // 프로필 사진
            src: 'https://jin3s.cafe24.com/assets/bgm.mp3',
        },
        {
            id: '2',
            name: "남자를 몰라",
            title: '남자를 몰라',
            subtitle: '버즈',
            time: '3:10',
            avatar: require('../../../images/profile.png'), // 프로필 사진
            src: 'https://jin3s.cafe24.com/assets/PerfectGirl.mp3',
        },
        // ... 다른 아이템들
    ];

    const onPlayTime = () => {
        setModalVisible(true);
        setiSound(sound);
    }

    const playSound = (item) => {
        if (sound) {
            if (selectedId === item.id) {
                sound.stop(() => {
                    sound.release();
                    setSound(null);
                    setSelectedId(null);
                    setIsPlaying(false);
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
            setSelectedId(item.id);
            setIsPlaying(true);

            newSound.play((success) => {
                if (!success) {
                    Alert.alert('Playback failed');
                }
            });
        });

        setSound(newSound);

    }


    const Item = ({ id, name, title, subtitle, time, avatar, src }) => (
        <View style={styles.item}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.messageContainer}>
                <Text style={styles.title} onPress={() => {
                    playSound({ id, name, title, subtitle, time, avatar, src });
                    onPlayTime();
                }}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{time}</Text>
                <TogglePlayBtn isPlaying={selectedId === id} onPress={() => { playSound({ id, name, title, subtitle, time, avatar, src }); }} />
            </View>
        </View>
    );


    return (
        <>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Item id={item.id} name={item.name} title={item.title} subtitle={item.subtitle} time={item.time} avatar={item.avatar} src={item.src} />
                )}
                keyExtractor={item => item.id}
            />
            <ModalUI isModalVisible={isModalVisible} setModalVisible={setModalVisible} isModalName={isModalName} />
        </>
    );
};




const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    messageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: 'grey',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end', // 요소들을 가로 방향 끝에 정렬합니다.
    },
    time: {
        fontSize: 14,
        color: 'grey',
        marginRight: 10, // 오른쪽 여백 추가
    },
});

export default MusicList2;

