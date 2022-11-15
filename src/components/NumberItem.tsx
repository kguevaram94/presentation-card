import React, { FunctionComponent, memo, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../class/Colors';
import { FontApp } from '../class/FontApp';
import TextApp from './TextApp/TextApp';

type Props = {
    size?: number,
    color?: string,
    number: string | number,
    onPress: () => void
};

const NumberItem: FunctionComponent<Props> = ({ size, color, number, onPress }) => {

    const customStyle = StyleSheet.create({
        container: {
            width: size ?? 50,
            height: size ?? 50,
            borderRadius: size ?? 50,
            backgroundColor: color ?? Colors.dodgerblue(),
            borderWidth: (size ?? 50) / 25,
            borderColor: Colors.dodgerblue('0.4')
        },
        text: {
            fontSize: (size ?? 50) / 2.5,
        }
    })

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, customStyle.container]}>
            <TextApp style={[styles.text, customStyle.text]}>{number}</TextApp>
        </TouchableOpacity>
    );
};

export default memo(NumberItem);


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.white(),
        ...FontApp.bold
    }
});