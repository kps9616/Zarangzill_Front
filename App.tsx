import React, { useState } from 'react';
import BottomSheets from "./src/components/bottom-sheets/bottom-sheets";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import Svg, { Path } from "react-native-svg";
import AppContext from './AppContext';
import { CameraUIProvider } from "./src/contexts/CameraUIContext";
import { Platform, SafeAreaView, View } from 'react-native';

const Container = Platform.OS === 'ios' ? SafeAreaView : View;
const Stack = createNativeStackNavigator();
export default function App() {

  const [stringValue, setStringValue] = useState('http://1.226.83.35:9090');
  const [uploadFilePath, setUploadFilePath] = useState("");
  const [uploadThumbnail, setUploadThumbnail] = useState("");

  const setValue = (string: React.SetStateAction<string>) => {
    setStringValue(string)
  }

  const setFilePath = (string: React.SetStateAction<string>) => {
    setUploadFilePath(string)
  }
  const setThumbnailPath = (string: React.SetStateAction<string>) => {
    setUploadThumbnail(string)
  }

  const values = {
    stringValue: stringValue,
    uploadThumbnail: uploadThumbnail,
    uploadFilePath: uploadFilePath,
    setValue,
    setFilePath,
    setThumbnailPath
  }

  return (
    <Container style={{ flex: 1, backgroundColor: 'black' }}>
      <AppContext.Provider value={values}>
        <NavigationContainer>

          <CameraUIProvider>
            <Stack.Navigator initialRouteName="BottomSheets">
              <Stack.Screen
                name="BottomSheets"
                component={BottomSheets}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </CameraUIProvider>

        </NavigationContainer>
      </AppContext.Provider>
    </Container>
  );


}
