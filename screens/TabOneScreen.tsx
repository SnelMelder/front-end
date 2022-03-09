import React, { useRef, useState } from 'react';
import { Button, StyleSheet } from 'react-native';
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
    const [currentStep, setNextStep] = useState(0);
    const maxSteps = 5;
    const stepSize = 1 / maxSteps;

    function handleStepNext() {
        if (currentStep + stepSize <= 1) {
            setNextStep(currentStep + stepSize);
        }
    }

    function handleStepPrevious() {
        if (currentStep - stepSize >= 0) {
            setNextStep(currentStep - stepSize);
        }
    }

    return (
        <View style={styles.container}>
            <ProgressBar maxSteps={maxSteps} currentStep={currentStep} />
            <Button onPress={handleStepNext} title="Next" />
            <Button onPress={handleStepPrevious} title="Previous" />
        </View>
    );
};

export default TabOneScreen;
