import React, {useState} from 'react';
import BottomSheets from "./src/components/bottom-sheets/bottom-sheets";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Svg, {Path} from "react-native-svg";
import AppContext from './AppContext';

const Stack = createNativeStackNavigator();
export default function App() {

    const [stringValue, setStringValue] = useState('http://192.168.159.1:8090');

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
        <Stack.Navigator initialRouteName="BottomSheets">
          <Stack.Screen
              name="BottomSheets"
              component={BottomSheets}
              options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </AppContext.Provider>
  );


}
