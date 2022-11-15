import React, { FunctionComponent } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type Props = {
    style?: StyleProp<ViewStyle> | {},
    size?: number
};

/**
 * Spacer for replace margin/padding on components.
 * Default size: 20.
 */

const Spacer: FunctionComponent<Props> = ({ style, size }) => <View style={[{ height: size ? size : 20, width: size ? size : 20, alignSelf: 'stretch' }, style]} />;

export default Spacer;
