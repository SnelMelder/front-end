import React from 'react';
import { Text, TextProps } from './Themed';

interface Props {
  style: Record<string, unknown>;
  textProps: TextProps;
}

const MonoText = ({ style, ...textProps }: Props) => (
  <Text {...textProps} style={[style, { fontFamily: 'space-mono' }]} />
);

export default MonoText;
