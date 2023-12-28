import React, { useContext, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Alert,
    Image,
    TouchableOpacity,
    Modal,
    Button,
    Pressable,
    SafeAreaView, Dimensions
} from "react-native";
import Video from "react-native-video";
import { useNavigation } from "@react-navigation/native";
//import {Side01Icon, Side02Icon} from "../../styles/icon"
import Svg, { Path } from "react-native-svg";
import WebView from "react-native-webview";
import AppContext from "../../../AppContext";

function shotformView() {
    const navigation = useNavigation();

    const myContext = useContext(AppContext);

    let sourceUri = myContext.stringValue + "/main.html";
    return (

        <SafeAreaView style={styles.container}>
            <WebView
                style={styles.webview}
                source={{ uri: sourceUri }}
            />
        </SafeAreaView>
    )
}
const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between'
    },
    webview: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight,
    },
    fullScreen: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    search: {
        position: "absolute",
        top: 16,
        left: 100,
        width: 24,
        height: 24,
        zIndex: 99
    },
    alarm: {
        position: "absolute",
        top: 16,
        left: 120,
        width: 24,
        height: 24,
        zIndex: 99
    },
    judgeBx: {
        display: "flex",
        marginBottom: 20,
        flexDirection: "column",
        flexWrap: "nowrap",
        alignUtems: "center",
    }

});


export default shotformView;