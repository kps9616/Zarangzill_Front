import React from 'react';
import "react-native-gesture-handler";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchComponent from "../search/search-component";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const Tab = createNativeStackNavigator();

function HeaderTabNavigationApp() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="SearchSf"
                component={SearchComponent}
                //options={{
               //     headerShown: false,
                //}}
            />
        </Tab.Navigator>
    );
}

export default HeaderTabNavigationApp;