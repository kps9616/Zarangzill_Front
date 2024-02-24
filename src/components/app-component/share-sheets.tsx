import { createNativeStackNavigator } from "react-native-screens/native-stack";
import ShotformView from "../shotform/shotformView";
import WinnerView from "../winner/winnerView";
import FansView from "../fans/fansView";
import MypagesView from "../mypage/mypagesView";

const Stack = createNativeStackNavigator();
export default function SharedStack({ screenName }: { screenName: 'Shotform' | 'Winner' | 'Fans' | 'Mypages' }) {

    return (
        <Stack.Navigator>
            {screenName === 'Shotform' ? (
                <Stack.Screen
                    name={'Home'}
                    component={ShotformView}
                    options={{ headerShown: false }}
                />
            ) : null}
            {screenName === 'Winner' ? (
                <Stack.Screen
                    name={'Winner'}
                    component={WinnerView}
                    options={{ headerShown: false }}
                />
            ) : null}
            {screenName === 'Fans' ? (
                <Stack.Screen
                    name={'Fans'}
                    component={FansView}
                    options={{ headerShown: false }}
                />
            ) : null}
            {screenName === 'Mypages' ? (
                <Stack.Screen
                    name={'Mypages'}
                    component={MypagesView}
                    options={{ headerShown: false }}
                />
            ) : null}

        </Stack.Navigator>
    );
}
