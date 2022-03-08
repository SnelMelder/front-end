import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

const TabOneScreen = () => {
    return (
        <View style={styles.container}>
            <ProgressBar maxSteps={5} />
        </View>
    );
};

export default TabOneScreen;
