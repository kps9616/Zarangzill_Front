import React from 'react';
import { View, TouchableOpacity, Dimensions, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from "react-native-svg";
import MovieView from "../movie/movieView";
import SharedStack from "../app-component/share-sheets";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

// 커스텀 탭 바 컴포넌트
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
                            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

function BottomTabNavigationApp() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="ShotForm" tabBar={props => <CustomTabBar {...props} />}>
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
            </Tab.Navigator>
        </NavigationContainer>
    );
}
