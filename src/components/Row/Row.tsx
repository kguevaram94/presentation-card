import React, { FunctionComponent } from 'react';
import { View, ViewProps } from 'react-native';

/**
 * Row container (flexDirection: 'row')
 */

const Row: FunctionComponent<ViewProps> = (props) => {

    return (
        <View  {...props} style={[{ flexDirection: 'row' }, props.style]}>
            {props.children}
        </View>
    );
};

export default Row;
