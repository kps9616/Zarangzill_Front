import React, {useContext} from "react";
import {View, Text, SafeAreaView, Dimensions, StyleSheet} from "react-native";
import WebView from "react-native-webview";
import AppContext from "../../../AppContext";

function winnerView() {
    const myContext = useContext(AppContext);

    let sourceUri = myContext.stringValue+"/45-1월우승-진행중.html";
    return(
        <SafeAreaView style={styles.container}>
            <WebView
                style={styles.webview}
                source={{uri:sourceUri}}
            />
        </SafeAreaView>
    );
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

});

export default winnerView;