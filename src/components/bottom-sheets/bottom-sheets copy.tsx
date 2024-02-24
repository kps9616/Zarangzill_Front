import React, { useState } from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MovieView from "../movie/movieView";
import SharedStack from "../app-component/share-sheets";
import Svg, { Path } from "react-native-svg";
import "react-native-svg";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ position: 'absolute', bottom: 0, width: '100%', }}>
            <Svg height="60" width="100%" viewBox="0 0 800 60">
                <Path d="M580,15.37v-0.07H427.53v0.07v6.98c0,14.66-12,26.66-26.66,26.66h-1.55c-14.66,0-26.66-12-26.66-26.66v-6.98v-0.07H220v0.07H0v44h220h360h220v-44H580z" fill="#000" />
                <Path d="M400,44.55c12.3,0,22.27-9.97,22.27-22.27c0-2.41-0.39-4.73-1.1-6.91C418.27,6.45,409.89,0,400,0s-18.27,6.45-21.18,15.37c-0.71,2.18-1.1,4.5-1.1,6.91C377.73,34.58,387.7,44.55,400,44.55z" fill="#000" />
            </Svg>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 10, width: '100%', justifyContent: 'space-around' }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <TouchableOpacity key={label} onPress={onPress} style={{ flex: 1, alignItems: 'center' }}>
                            <Icon name={options.tabBarIconName} size={24} color={isFocused ? '#673ab7' : '#222'} />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

function BottomTabNavigationApp() {
    return (
        <Tab.Navigator initialRouteName="ShotForm" screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
        }}>
            <Tab.Screen
                name="Shotform"
                options={{
                    tabBarLabel: '', //탭이름 표시하지 않음
                    title: '숏폼',
                    tabBarIcon: () => (
                        <Svg width="24px" height="24px" viewBox="0 0 24 24">
                            <Path fill="#ffffff" d="M23.77,11.54L12.55,0.22C12.41,0.08,12.21,0,12,0c-0.21,0-0.41,0.08-0.55,0.22L0.23,11.54c-0.3,0.3-0.3,0.8,0,1.1c0.15,0.15,0.34,0.23,0.55,0.23c0.21,0,0.4-0.08,0.55-0.23l1.27-1.28l0,10.26C2.6,22.93,3.66,24,4.97,24h0.6H5.7h1.58h0.76h1.59h1.72h7.69c1.31,0,2.37-1.07,2.37-2.39V11.36l1.27,1.28c0.15,0.15,0.34,0.23,0.55,0.23c0.21,0,0.4-0.08,0.55-0.23C24.08,12.34,24.08,11.84,23.77,11.54z M15.29,16.16l-3.78,2.2c-0.15,0.08-0.31,0.13-0.47,0.13c-0.52,0-0.95-0.43-0.95-0.96v-4.39c0-0.53,0.43-0.96,0.95-0.96c0.16,0,0.33,0.04,0.47,0.13l3.78,2.2c0.3,0.17,0.47,0.48,0.47,0.83C15.77,15.68,15.59,15.99,15.29,16.16z" />
                        </Svg>
                    ),
                }}
            >
                {() => <SharedStack screenName={"Shotform"} />}
            </Tab.Screen>
            <Tab.Screen
                name="Winner"
                options={{
                    title: '랭킹',
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: () => (
                        <Svg width="24px" height="23px" viewBox="0 0 24 23">
                            <Path fill="#ffffff" d="M18.97,0C18.43,0,5.72,0,5.06,0C4.75,0,4.5,0.23,4.47,0.53c-0.17,1.79,0.42,6.64,1.2,9.8c0.8,3.22,2.88,5.25,5.74,5.58v3.57H8.39c-1.63,0-2.96,1.32-2.96,2.94c0,0.32,0.26,0.58,0.59,0.58h11.97c0.32,0,0.59-0.26,0.59-0.58c0-1.62-1.33-2.94-2.96-2.94h-3.02v-3.56c2.81-0.32,4.95-2.4,5.74-5.59c0.8-3.24,1.3-7.69,1.22-9.5c0-0.03,0-0.06-0.01-0.09c0.01-0.05,0.02-0.1,0.02-0.15C19.56,0.26,19.29,0,18.97,0z M12.02,14.81c-2.54-0.07-4.49-1.85-5.21-4.76C6.07,7.06,5.6,3.03,5.62,1.16c2.28,0,10.49,0,12.77,0c0.02,1.87-0.48,5.98-1.2,8.88C16.47,12.96,14.53,14.74,12.02,14.81zM8.39,20.64h7.21c0.77,0,1.45,0.48,1.69,1.2H6.7C6.95,21.12,7.62,20.64,8.39,20.64z" />
                            <Path fill="#ffffff" d="M23.89,3.07c-0.05-0.28-0.29-0.48-0.58-0.48h-2.17c-0.32,0-0.59,0.26-0.59,0.58s0.26,0.58,0.59,0.58h1.66c0.08,0.84-0.01,1.7-0.26,2.49c-0.6,1.84-1.91,2.9-2.64,3.37c-0.27,0.17-0.35,0.53-0.18,0.8c0.11,0.17,0.29,0.27,0.49,0.27c0.11,0,0.22-0.03,0.32-0.09c0.86-0.55,2.42-1.8,3.13-3.99C24.01,5.48,24.1,4.26,23.89,3.07z" />
                            <Path fill="#ffffff" d="M4.11,9.61C3.38,9.15,2.06,8.09,1.46,6.25C1.21,5.46,1.12,4.6,1.2,3.76h1.66c0.32,0,0.59-0.26,0.59-0.58S3.18,2.59,2.86,2.59H0.69c-0.28,0-0.53,0.2-0.58,0.48C-0.1,4.26-0.02,5.48,0.35,6.6c0.71,2.19,2.26,3.44,3.13,3.99c0.09,0.06,0.2,0.09,0.32,0.09c0.2,0,0.38-0.1,0.49-0.27c0.08-0.13,0.11-0.29,0.08-0.44C4.33,9.83,4.24,9.7,4.11,9.61z" />
                            <Path fill="#ffffff" d="M15.51,5.51l-1.89-0.27l-0.85-1.7C12.62,3.24,12.33,3.06,12,3.06s-0.62,0.18-0.77,0.47l-0.85,1.7L8.49,5.51C8.17,5.55,7.91,5.77,7.8,6.08C7.7,6.39,7.78,6.73,8.02,6.96l1.37,1.33l-0.32,1.87c-0.06,0.32,0.07,0.64,0.34,0.83c0.26,0.19,0.61,0.22,0.9,0.06L12,10.17l1.69,0.88c0.12,0.06,0.26,0.1,0.4,0.1c0.18,0,0.35-0.06,0.5-0.16c0.27-0.19,0.4-0.51,0.34-0.83l-0.32-1.87l1.37-1.33c0.23-0.23,0.32-0.56,0.22-0.87C16.1,5.77,15.83,5.55,15.51,5.51z M13.43,8.32l0.24,1.41L12.4,9.06c-0.25-0.13-0.55-0.13-0.8,0l-1.27,0.66l0.24-1.41c0.05-0.28-0.04-0.56-0.25-0.75l-1.03-1l1.42-0.21C11,6.32,11.24,6.15,11.36,5.9L12,4.61l0.64,1.28c0.12,0.25,0.37,0.42,0.64,0.46l1.42,0.21l-1.03,1C13.47,7.76,13.38,8.04,13.43,8.32z" />
                        </Svg>
                    ),
                }}
            >
                {() => <SharedStack screenName={"Winner"} />}
            </Tab.Screen>
            <Tab.Screen
                name="Movie"
                component={MovieView}
                options={{
                    title: '촬영',
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: () => (

                        <Svg width="19px" height="19px" viewBox="0 0 19 19">
                            <Path fill="#ffffff" d="M8.64,0h1.79v8.62H19v1.63h-8.57V19H8.64v-8.75H0V8.62h8.64V0z" />
                        </Svg>
                    ),
                }}
            />
            <Tab.Screen
                name="Fans"
                options={{
                    title: '팬',
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: () => (
                        <Svg width="25px" height="23px" viewBox="0 0 25 23">
                            <Path fill="#ffffff" d="M23.04,2.11c-0.01-0.01-0.03-0.03-0.03-0.03C21.75,0.74,20.08,0,18.3,0c-1.78,0-3.45,0.73-4.7,2.07c-0.2,0.21-0.38,0.34-0.57,0.41c-0.59,0.21-1.18,0.07-1.6-0.39c-0.48-0.52-1.02-1.05-1.67-1.37C6.38-0.9,2.74,0.27,0.89,3.57C0.56,4.16,0.32,4.8,0.18,5.48c-0.53,2.49,0.14,5.02,1.78,6.78l9.64,10.33c0.24,0.26,0.56,0.4,0.91,0.4c0.34,0,0.66-0.14,0.91-0.4l9.64-10.33C24.3,10.91,25,9.11,25,7.19C25,5.27,24.3,3.46,23.04,2.11z M12.5,21.39L3.07,11.28C2.24,10.4,1.71,9.36,1.53,8.27C1.2,6.38,1.73,4.53,2.97,3.19C3.98,2.11,5.31,1.55,6.7,1.55c0.85,0,1.72,0.21,2.55,0.64c0.45,0.23,0.81,0.61,1.11,0.94c0.69,0.79,1.71,1.13,2.72,0.93c0.55-0.11,1.09-0.42,1.51-0.87c0.99-1.06,2.31-1.65,3.72-1.65c1.41,0,2.73,0.59,3.72,1.65l0.03,0.03c2.03,2.2,2.01,5.77-0.03,7.96L12.5,21.39z" />
                        </Svg>
                    ),
                }}
            >
                {() => <SharedStack screenName={"Fans"} />}
            </Tab.Screen>
            <Tab.Screen
                name="Mypages"
                options={{
                    title: '마이페이지',
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: () => (
                        <Svg width="20px" height="24px" viewBox="0 0 20 24">
                            <Path fill="#ffffff" d="M10,13.46c-5.51,0-10,4.44-10,9.9C0,23.71,0.29,24,0.65,24h18.7c0.36,0,0.65-0.29,0.65-0.64C20,17.9,15.51,13.46,10,13.46z M18.67,22.71H1.32c0.33-4.48,4.12-7.97,8.68-7.97C14.55,14.75,18.33,18.23,18.67,22.71z" />
                            <Path fill="#ffffff" d="M10,12.9c3.59,0,6.52-2.89,6.52-6.45C16.52,2.89,13.59,0,10,0C6.41,0,3.48,2.89,3.48,6.45C3.48,10.01,6.41,12.9,10,12.9z M4.78,6.45c0-2.85,2.34-5.17,5.22-5.17c2.88,0,5.22,2.32,5.22,5.17c0,2.85-2.34,5.17-5.22,5.17C7.12,11.62,4.78,9.3,4.78,6.45z" />
                        </Svg>
                    ),
                }}
            >
                {() => <SharedStack screenName={"Mypages"} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'black', // 배경 색상을 검은색으로 설정
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        shadowOpacity: 0,
        height: 60,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default BottomTabNavigationApp;