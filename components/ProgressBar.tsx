import * as Progress from 'react-native-progress';
import React, { useState } from 'react';
import { Button, View } from 'react-native';

export default function ProgressBar(props: { maxSteps: number }) {
    const [currentStep, setNextStep] = useState(0);
    const stepSize = 1 / props.maxSteps;

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
        <View>
            <Progress.Bar
                unfilledColor="rgba(226, 226, 226, 1)"
                color="rgba(0, 143, 115, 1)"
                progress={currentStep}
                width={300}
                height={10}
                borderWidth={0}
            />
            <Button onPress={handleStepNext} title="Next" />
            <Button onPress={handleStepPrevious} title="Previous" />
        </View>
    );
}
