import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
// Documentation:
// https://www.npmjs.com/package/@fortawesome/react-native-fontawesome#size
import styles from './Header.scss';

const Header = () => {
    function handleBack() {
        // Navigate 1 step back
    }

    function handleClose() {
        // Navigate to main menu
    }

    return (
        <View style={styles.header}>
            <Pressable
                onPress={handleBack}
                style={[styles.buttonLeft, styles.button]}
                accessibilityLabel="Back button"
            >
                <FontAwesomeIcon icon={faChevronLeft} size={26} />
            </Pressable>

            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/goevaers_logo.png')}
                />
                <Text style={styles.text}>NIEUWE MELDING</Text>
            </View>

            <Pressable
                onPress={handleClose}
                style={[styles.buttonRight, styles.button]}
                accessibilityLabel="Close button"
            >
                <FontAwesomeIcon icon={faXmark} size={28} />
            </Pressable>
        </View>
    );
};

export default Header;
