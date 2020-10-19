import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen' ;
import DetailsScreen from '../screens/DetailsScreen' ;

export default function App() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="main" headerMode={false}>
                <Stack.Screen name="main" component={MainScreen} />
                <Stack.Screen name="details" component={DetailsScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}