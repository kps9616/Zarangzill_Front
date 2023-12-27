import React from "react";
import { View, Text } from "react-native";
import CameraUI from "../../../android/app/src/components/CameraUI/CameraUI";
import { createStackNavigator } from "@react-navigation/stack";
import EditUI from "../../../android/app/src/components/EditUI/EditUI";
import SelectMusicUI from "../../../android/app/src/components/SelectMusicUI/SelectMusicUI";

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