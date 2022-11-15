import React, { FunctionComponent, ReactNode } from 'react';
import { Platform, StyleSheet, View, ViewStyle } from 'react-native';
import DropShadow from 'react-native-drop-shadow';

type Props = {
    style?: ViewStyle,
    children: ReactNode
}
const ShadowContainer: FunctionComponent<Props> = (props) => {

    if (Platform.OS === 'android') {

        return (
            <DropShadow style={[styles.shadowStyle, props.style]}>
                {props.children}
            </DropShadow>
        );

    } else {

        // iOS
        return (
            <View style={[styles.shadowStyle, props.style]}>
                {props.children}
            </View>
        );

    }

};

export default ShadowContainer;

const styles = StyleSheet.create({
    shadowStyle: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
    },
});
