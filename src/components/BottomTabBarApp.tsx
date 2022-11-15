import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TextProps, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Row from './Row/Row';
import ShadowContainer from './ShadowContainer/ShadowContainer';
import TextApp from './TextApp/TextApp';


const BottomTabBarApp: FunctionComponent<BottomTabBarProps> = (props) => {

    const { navigation, state } = props;

    const iconSize = 20;

    const onPressLogin = () => {
        navigation.navigate('Auth')
    };

    const onPressBuy = () => {
        navigation.navigate('Home')

    };

    const onPressSettings = () => {
        navigation.navigate('Settings')

    };

    return (
        <ShadowContainer>
            <Row style={styles.container}>
                <TouchableOpacity style={styles.bottomTabContainer} onPress={onPressLogin}>
                    <Icon name={'user'} color={state.index == 0 ? 'dodgerblue' : 'gray'} size={iconSize} />
                    <TextApp style={{ color: state.index == 0 ? 'dodgerblue' : 'gray' }}>Login</TextApp>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTabContainer} onPress={onPressBuy}>
                    <Icon name={'shopping-cart'} color={state.index == 1 ? 'dodgerblue' : 'gray'} size={iconSize} />
                    <TextApp style={{ color: state.index == 1 ? 'dodgerblue' : 'gray' }}>Buy</TextApp>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTabContainer} onPress={onPressSettings}>
                    <Icon name={'settings'} color={state.index == 2 ? 'dodgerblue' : 'gray'} size={iconSize} />
                    <TextApp style={{ color: state.index == 2 ? 'dodgerblue' : 'gray' }}>Settings</TextApp>
                </TouchableOpacity>
            </Row>
        </ShadowContainer>
    );
};

export default BottomTabBarApp;

const styles = StyleSheet.create({
    container: {
        height: 56,
        width: '100%',
        backgroundColor: '#FFF'
    },
    bottomTabContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
