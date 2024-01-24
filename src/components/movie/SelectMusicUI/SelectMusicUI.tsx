import React from "react";
import { View, Text, StyleSheet, Touchable } from "react-native";
import MusicList from "./MusicList";
import GenreSelect from "./GenreSelect";
import MusicUILabelEX from "./MusicUILabelEX";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Path, Svg } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import MusicList2 from "./MusicList2";



const CloseBtn = () => {
    const navigation = useNavigation();
    const backCameraUI = () => {
        navigation.navigate('CameraUI');
    }

    return (
        <View style={styles.closeButton} >
            <TouchableOpacity onPress={backCameraUI} style={{ width: 20, height: 20, }}>
                <Svg width="30" height="30" viewBox="0 0 20 20">
                    <Path fill="none" stroke="#181818" strokeWidth="0.8" d="M16,16 L4,4" />
                    <Path fill="none" stroke="#181818" strokeWidth="0.8" d="M16,4 L4,16" />
                </Svg>
            </TouchableOpacity>
        </View>
    );
};



const SelectMusicUI = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>사운드</Text>
                <CloseBtn />
            </View>

            <MusicUILabelEX />
            <GenreSelect />
            <MusicList2 />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 5,
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 15,
        position: 'relative', // 상대 위치 지정
    },
    headerTitle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 12, // top을 조정하여 정확한 위치에 배치
        fontSize: 22,
        fontWeight: 'bold',
        color: '#181818',
        textAlign: 'center',
    },
    closeButton: {
        position: 'absolute',
        right: 15, // 오른쪽에 여백을 주어 배치
        top: 10, // top을 조정하여 정확한 위치에 배치
    },
});

export default SelectMusicUI;
