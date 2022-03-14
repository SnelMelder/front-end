import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './Header.scss';

const Header = () => {
    return (
        <View style={styles.header}>
            <Pressable
                style={[styles.buttonLeft, styles.button]}
                accessibilityLabel="Learn more about this purple button"
            >
                <Text>Left</Text>
            </Pressable>

            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/goevaers_logo.png')}
                />
                <Text style={styles.text}>NIEUWE MELDING</Text>
            </View>

            <Pressable
                style={[styles.buttonRight, styles.button]}
                accessibilityLabel="Learn more about this purple button"
            >
                <Text>X</Text>
            </Pressable>
        </View>
    );
};

export default Header;
