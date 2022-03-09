import * as Progress from 'react-native-progress';
import React from 'react';
import { View } from 'react-native';

export default function ProgressBar(props: {
    maxSteps: number;
    currentStep: number;
}) {
    return (
        <View>
            <Progress.Bar
                unfilledColor="rgba(226, 226, 226, 1)"
                color="rgba(0, 143, 115, 1)"
                progress={props.currentStep}
                width={300}
                height={10}
                borderWidth={0}
            />
        </View>
    );
}
