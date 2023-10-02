import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import React from 'react';

const DeleteIcon = () => (
    <Svg width="30" height="30" viewBox="0 0 20 20">
        <Path fill="none" stroke="#ffffffb8" strokeWidth="0.8" d="M16,16 L4,4" />
        <Path fill="none" stroke="#ffffffb8" strokeWidth="0.8" d="M16,4 L4,16" />
    </Svg>
);


const styles = StyleSheet.create({
    vDel: {
        backgroundColor: 'rgba(21, 21, 21, 0.5)',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 30, // 100%는 width/height의 절반으로 표현됩니다.
    },
});


const DeleteBtn = () => {
    return (
        <TouchableOpacity style={[styles.vDel, {
            position: 'absolute',
            left: 14,
            top: 35,
        }]}>
            <DeleteIcon />
        </TouchableOpacity>
    );
};

export default DeleteBtn;