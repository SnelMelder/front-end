import React, { useState } from 'react';
import { Pressable, Button } from 'react-native';
import styles from './shared.scss';

import Header from '../components/Header/Header';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { Text, View } from '../components/Themed';
import AfrondenButton from '../components/AfrondenButton/AfrondenButton';

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
        <>
            <Header />

            <AfrondenButton>
                <Pressable
                    style={styles.button}
                    onPress={() => setModalVisible(false)}
                >
                    <Text style={[styles.modalText, { fontSize: 20 }]}>
                        Afronden
                    </Text>
                </Pressable>
            </AfrondenButton>

            <View style={styles.container}>
                <ProgressBar maxSteps={maxSteps} currentStep={currentStep} />
                <Button onPress={handleStepNext} title="Next" />
                <Button onPress={handleStepPrevious} title="Previous" />
            </View>
        </>
    );
};

export default TabOneScreen;
