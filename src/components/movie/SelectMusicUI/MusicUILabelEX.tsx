import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MusicUILabelEX = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    placeholder="음악 검색"
                    onChangeText={text => setSearchQuery(text)}
                    value={searchQuery}
                />
                <TouchableOpacity style={styles.searchIcon}>
                    <Text>검색</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tabSection}>
                <TouchableOpacity style={styles.tabButton}>
                    <Text style={styles.tabTextActive}>최신</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabButton}>
                    <Text style={styles.tabText}>즐겨찾기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabButton}>
                    <Text style={styles.tabText}>업로드</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.activeTabIndicator} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10, // 화면 상단에 공간을 두기 위해 설정
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        padding: 10,
    },
    searchIcon: {
        padding: 10,
    },
    tabSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    tabButton: {
        flex: 1, // 탭 버튼이 동일한 공간을 차지하도록 설정
    },
    tabText: {
        textAlign: 'center',
        paddingVertical: 10,
    },
    tabTextActive: {
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: 'bold',
        color: '#181818',
    },
    activeTabIndicator: {
        height: 1,
        backgroundColor: '#181818',
        marginHorizontal: 15,
    },
    closeIcon: {
        paddingLeft: 10,
    },
});

export default MusicUILabelEX;
