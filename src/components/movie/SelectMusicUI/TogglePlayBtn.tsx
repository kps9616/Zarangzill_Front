import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet, Alert } from 'react-native';
import Svg, { Circle, Polygon } from 'react-native-svg';

const PlayBtn = ({ onPress }) => (

    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Svg width="24" height="24" viewBox="0 0 20 20">
            <Polygon fill="none" stroke="#000" strokeWidth="1.1" points="8.5 7 13.5 10 8.5 13" />
            <Circle fill="none" stroke="#000" strokeWidth="1.1" cx="10" cy="10" r="9" />
        </Svg>
    </TouchableOpacity>
);

const PauseBtn = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.musicCircleContainer}>
        <Svg height="24" width="24" viewBox="0 0 100 100">
            <Circle cx="50" cy="50" r="48" stroke="#000" strokeWidth="5" fill="none" />
        </Svg>
        <View style={styles.musicSquare} />
    </TouchableOpacity>
);

const TogglePlayBtn = ({ isPlaying, onPress }) => {
    return isPlaying ? <PauseBtn onPress={onPress} /> : <PlayBtn onPress={onPress} />;
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    musicCircleContainer: {
        width: 24,
        height: 24,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    musicSquare: {
        width: 10,
        height: 10,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -5,
        marginLeft: -5,
        backgroundColor: '#3d3d3d',
    },
});

export default TogglePlayBtn;
