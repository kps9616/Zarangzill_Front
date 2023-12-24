import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import BottomSheets from "./src/components/bottom-sheets/bottom-sheets";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import SearchComponent from "./src/components/search/search-component";
import AlarmComponent from "./src/components/header/alarm-component";
import ShotformView from "./src/components/shotform/shotformView";
import WinnerView from "./src/components/winner/winnerView";
import FansView from "./src/components/fans/fansView";
import MypagesView from "./src/components/mypage/mypagesView";
import AppContext from './AppContext';

const Stack = createNativeStackNavigator();
export default function App() {

    const [stringValue, setStringValue] = useState('http://192.168.159.1:8090');

    const setValue = (string) => {
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
                name="Alarm"
                component={AlarmComponent}
                // options={{headerShown: false}}
            >
            </Stack.Screen>
          <Stack.Screen
              name="SearchSf"
              component={SearchComponent}
             // options={{headerShown: false}}
          >
          </Stack.Screen>
          <Stack.Screen
              name="BottomSheets"
              component={BottomSheets}
              // stack navigator를 중첩할때마다 헤더가 하나씩 늘어나기 때문에 header hide처리
              // (추후 bottomTab 하위에 shared stack이 추가되는 케이스 고려)
              options={{headerShown: false}}
          >
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </AppContext.Provider>
  );


}
