import React from "react";
import { View, Text } from "react-native";
import CameraUI from "./CameraUI/CameraUI";
import { createStackNavigator } from "@react-navigation/stack";
import EditUI from "./EditUI/EditUI";
import SelectMusicUI from "./SelectMusicUI/SelectMusicUI";

const MovieStack = createStackNavigator();

function MovieViewStack() {
    return (
        <MovieStack.Navigator initialRouteName="CameraUI">
            <MovieStack.Screen name="CameraUI" component={CameraUI} options={{ headerShown: false, }} />
            <MovieStack.Screen name="EditUI" component={EditUI} options={{ headerShown: false, }} />
            <MovieStack.Screen name="SelectMusicUI" component={SelectMusicUI} options={{ headerShown: false, }} />
        </MovieStack.Navigator>
    );
}

function movieView() {
    return (
        <MovieViewStack />
    );
}

export default movieView;