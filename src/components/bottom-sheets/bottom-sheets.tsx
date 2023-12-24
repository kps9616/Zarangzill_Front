import React, {useState} from 'react';
import "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FansView from "../fans/fansView";
import ShotformView from "../shotform/shotformView";
import WinnerView from "../winner/winnerView";
import MovieView from "../movie/movieView";
import MypagesView from "../mypage/mypagesView";
import SearchComponent from "../search/search-component";
import SharedStack from "../app-component/share-sheets";


const Tab = createBottomTabNavigator();
function BottomTabNavigationApp() {
    return (
        <Tab.Navigator initialRouteName="ShotForm">
            <Tab.Screen
                name="Shotform"
                options={{
                    title: '숏폼',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            >
                {()=> <SharedStack screenName={"Shotform"}/>}
            </Tab.Screen>
            <Tab.Screen
                name="Winner"
                options={{
                    title: '랭킹',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Icon name="notifications" color={color} size={size} />
                    ),
                }}
            >
                {()=> <SharedStack screenName={"Winner"}/>}
            </Tab.Screen>
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
                options={{
                    title: '팬',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Icon name="message" color={color} size={size} />
                    ),
                }}
            >
                {()=> <SharedStack screenName={"Fans"}/>}
            </Tab.Screen>
            <Tab.Screen
                name="Mypages"
                options={{
                    title: '마이페이지',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Icon name="message" color={color} size={size} />
                    ),
                }}
            >
                {()=> <SharedStack screenName={"Mypages"}/>}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default BottomTabNavigationApp;