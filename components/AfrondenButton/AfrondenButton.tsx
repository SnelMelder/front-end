import React from 'react';
import { Text, View } from 'react-native';
import styles from './AfrondenButton.scss';

const AfrondenButton = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.modalText}>Uw melding</Text>
            <View style={styles.closeButton}>Afronden</View>
        </View>
    );
};

export default AfrondenButton;
