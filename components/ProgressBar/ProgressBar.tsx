import React from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';

interface Props {
  currentStep: number;
}

const ProgressBar = ({ currentStep }: Props) => (
  <View>
    <Progress.Bar
      unfilledColor="rgba(226, 226, 226, 1)"
      color="rgba(0, 143, 115, 1)"
      progress={currentStep}
      width={300}
      height={10}
      borderWidth={0}
    />
  </View>
);

export default ProgressBar;
