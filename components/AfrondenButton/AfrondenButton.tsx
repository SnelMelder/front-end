import React from 'react';
import { Text, View } from 'react-native';
import styles from './AfrondenButton.scss';

const AfrondenButton = (props: { children: any }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.modalText}>Uw melding</Text>
            <Text style={styles.closeButton}>Afronden</Text>
            <View style={styles.closeButton}>{props.children}</View>
        </View>
    );
};

export default AfrondenButton;
