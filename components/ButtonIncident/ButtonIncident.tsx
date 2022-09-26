import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './ButtonIncident.scss';
import { ButtonIncidentProps } from '../../types';

const ButtonIncident = ({ title, method, style }: ButtonIncidentProps) => (
  <View>
    <TouchableOpacity onPress={method} style={[styles.incidentButton, style]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default ButtonIncident;
