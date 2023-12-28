import React, {useState} from 'react';
import BottomSheets from "./src/components/bottom-sheets/bottom-sheets";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Svg, {Path} from "react-native-svg";
import AppContext from './AppContext';
import {CameraUIProvider} from "./android/app/src/contexts/CameraUIContext";

const Stack = createNativeStackNavigator();
export default function App() {

    const [stringValue, setStringValue] = useState('http://1.226.83.35:8090');

    const setValue = (string: React.SetStateAction<string>) => {
        setStringValue(string)
    }


    const values = {
        stringValue: stringValue,
        setValue
    }

  return (
      <AppContext.Provider value={values}>
      <NavigationContainer>

          <CameraUIProvider>
        <Stack.Navigator initialRouteName="BottomSheets">
          <Stack.Screen
              name="BottomSheets"
              component={BottomSheets}
              options={{headerShown: false}}
          />
        </Stack.Navigator>
          </CameraUIProvider>
      </NavigationContainer>
      </AppContext.Provider>
  );


}
