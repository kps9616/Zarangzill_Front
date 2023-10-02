import React from 'react';
import { View } from 'react-native';
import CameraUI from './android/app/src/components/CameraUI/CameraUI';
import { CameraUIProvider } from './android/app/src/contexts/CameraUIContext';
import EditUI from './android/app/src/components/EditUI/EditUI';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens'; // import enableScreens
import SelectMusicUI from './android/app/src/components/SelectMusicUI/SelectMusicUI';

enableScreens(); // Call enableScreens to activate react-native-screens




const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: 'black' }}>
          <CameraUIProvider>
            <Stack.Navigator initialRouteName="CameraUI"
              screenOptions={{
                headerShown: false
              }}>
              <Stack.Screen name="CameraUI" component={CameraUI} />
              <Stack.Screen name="EditUI" component={EditUI} />
              <Stack.Screen name="SelectMusicUI" component={SelectMusicUI} />
            </Stack.Navigator>
          </CameraUIProvider>
        </View>
      </NavigationContainer>
    </>
  );
}

export default App;
