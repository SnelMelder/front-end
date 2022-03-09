import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const styles = StyleSheet.create({
    header: {
        height: 130,
        alignSelf: 'stretch',
        padding: 0,
        backgroundColor: '#555',
        top: 0,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    text: {
        color: '#000',
        fontSize: 23,
        textAlign: 'center',
    },
    container: {
        alignSelf: 'flex-end',
        backgroundColor: '#FFF',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom: 0,
    },
    logo: {
        width: 70,
        height: 70,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#fff',
        width: 70,
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLeft: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    buttonRight: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
});

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
                    source={require('../assets/images/goevaers_logo.png')}
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
