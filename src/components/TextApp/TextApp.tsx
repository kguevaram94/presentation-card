import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { FontApp } from '../../class/FontApp';

const TextApp: FunctionComponent<TextProps> = (props) => {

    return (
        <Text {...props} style={[styles.defaultTextStyle, props.style]}>
            {props.children}
        </Text>
    );
};

export default TextApp;

const styles = StyleSheet.create({
    defaultTextStyle: {
        ...FontApp.regular,
        fontSize: 14,
    },
});
