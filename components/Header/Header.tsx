import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './Header.scss';

const Header = () => {
    function handleBack() {}

    function handleClose() {}

    return (
        <View style={styles.header}>
            <Pressable
                onPress={handleBack}
                style={[styles.buttonLeft, styles.button]}
                accessibilityLabel="Back button"
            >
                <Image
                    style={styles.icon}
                    source={require('../../assets/images/chevron-left-solid.png')}
                />
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
                <Image
                    style={styles.icon}
                    source={require('../../assets/images/xmark-solid.png')}
                />
            </Pressable>
        </View>
    );
};

export default Header;
