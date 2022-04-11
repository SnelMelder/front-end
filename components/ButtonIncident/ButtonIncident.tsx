import React from 'react';
import { Button, TouchableOpacity } from 'react-native';

import { Text, View } from '../../components/Themed';
import styles from './ButtonIncident.scss';
import { ButtonIncidentProps } from '../../types';

const ButtonIncident = ({ title, method, style }: ButtonIncidentProps) => {
    return (
        <View>
            <TouchableOpacity
                onPress={method}
                style={[styles.incidentButton, style]}
            >
                <Text>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ButtonIncident;
