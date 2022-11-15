import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Colors } from '../class/Colors';
import Home from '../screens/Home';

StatusBar.setBackgroundColor(Colors.dodgerblue());

const Root = () => {

    return (
        <NavigationContainer>
            <Home />
        </NavigationContainer>
    );
};

export default Root;
