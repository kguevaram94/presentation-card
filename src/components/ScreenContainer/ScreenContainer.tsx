import React, { FunctionComponent, useContext } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

/**
 * Full container for screens (flex: 1)
 */

const ScreenContainer: FunctionComponent<ViewProps> = ({ ...viewProps }) => {



    return (
        <View {...viewProps} style={[styles.default, viewProps.style]} >
            {viewProps.children}
        </View>
    );
};

export default ScreenContainer;

const styles = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: '#FFF',
    },
});

