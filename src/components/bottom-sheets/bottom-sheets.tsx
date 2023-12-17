import React from 'react';
import "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FansView from "../fans/fansView";
import ShotformView from "../shotform/shotformView";
import WinnerView from "../winner/winnerView";
import MovieView from "../movie/movieView";
import MypagesView from "../mypage/mypagesView";

const Tab = createBottomTabNavigator();

function BottomTabNavigationApp() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="ShotForm">
                <Tab.Screen
                    name="Shotform"
                    component={ShotformView}
                    options={{
                        title: '숏폼',
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Winner"
                    component={WinnerView}
                    options={{
                        title: '랭킹',
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Icon name="notifications" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Movie"
                    component={MovieView}
                    options={{
                        title: '촬영',
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Icon name="plus" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Fans"
                    component={FansView}
                    options={{
                        title: '팬',
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Icon name="message" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Mypages"
                    component={MypagesView}
                    options={{
                        title: '마이페이지',
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Icon name="message" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomTabNavigationApp;