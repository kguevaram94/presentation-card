import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from '../class/Colors';
import ContactDetails from '../screens/ContactDetails';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';

StatusBar.setBackgroundColor(Colors.dodgerblue());

const Stack = createNativeStackNavigator();

const Root = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='ContactDetails' component={ContactDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Root;
