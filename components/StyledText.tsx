import React from 'react';
import { Text, TextProps } from './Themed';

export var MonoText = (props: TextProps) => {
    return (
        <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
    );
};
