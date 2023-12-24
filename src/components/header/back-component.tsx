import {BackHandler} from "react-native";
import {useEffect} from "react";

const handlePressBack = () => {
    if(navigation?.canGoBack()) {
        navigation.goBack()
        return true
    }
    return false
}

useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlePressBack)
    return () => {
        BackHandler.removeEventListener('hardwareBackPress',handlePressBack)
    }
}, [handlePressBack])