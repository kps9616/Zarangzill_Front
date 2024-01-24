import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Checkbox = ({ label, value, onValueChange }) => {
    return (
        <TouchableOpacity
            style={[
                styles.checkboxBase,
                { borderColor: value ? 'black' : 'grey' } // 상태에 따른 borderColor 변경
            ]}
            onPress={onValueChange}>
            <Text style={styles.checkboxLabel}>{label}</Text>
            {value && <Text style={styles.checkboxTick}>✓</Text>}
        </TouchableOpacity>
    );
};

const GenreSelect = () => {
    const [checked, setChecked] = useState({
        hipHop: true,
        rAndB: false,
        edm: false,
        ballad: false,
        ost: false,
        bgm: false,
    });

    const handlePress = (genre) => {
        setChecked(prevState => ({ ...prevState, [genre]: !prevState[genre] }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Checkbox label="힙합" value={checked.hipHop} onValueChange={() => handlePress('hipHop')} />
                <Checkbox label="R&B" value={checked.rAndB} onValueChange={() => handlePress('rAndB')} />
            </View>
            <View style={styles.row}>
                <Checkbox label="EDM" value={checked.edm} onValueChange={() => handlePress('edm')} />
                <Checkbox label="발라드" value={checked.ballad} onValueChange={() => handlePress('ballad')} />
            </View>
            <View style={styles.row}>
                <Checkbox label="OST" value={checked.ost} onValueChange={() => handlePress('ost')} />
                <Checkbox label="BGM" value={checked.bgm} onValueChange={() => handlePress('bgm')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 10, // 기기의 상단 여백 고려

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start', // 변경된 부분
        alignItems: 'center',
        width: '100%',
    },
    checkboxBase: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        padding: 10,
        marginVertical: 5,
        marginLeft: 5, // 변경된 부분: 왼쪽 마진 추가
        marginRight: 5, // 변경된 부분: 오른쪽 마진 추가
        alignItems: 'center',
        justifyContent: 'center',
    },
    // 마지막 체크박스에 적용될 마지막 스타일 추가
    lastCheckbox: {
        marginRight: 0, // 변경된 부분: 마지막 체크박스의 오른쪽 마진을 제거
    },
    checkboxContent: {
        alignItems: 'center', // 텍스트를 중앙에 정렬
    },
    checkboxLabel: {
        fontSize: 14,
        textAlign: 'center', // 텍스트를 중앙에 정렬
    },
    checkboxTick: {
        fontSize: 14,
        fontWeight: 'bold',
        position: 'absolute', // 체크 표시를 중앙에 위치시키기
        right: 10, // 체크 표시의 위치 조정
    },
});

export default GenreSelect;
