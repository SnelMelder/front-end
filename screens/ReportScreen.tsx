import React, { useState } from 'react';

import sharedStyles from './shared.scss';

import Header from '../components/Header/Header';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import ButtonIncident from '../components/ButtonIncident/ButtonIncident';
import { Text, View } from '../components/Themed';

import ReportCategory from './report/ReportCategory';
import ReportLocation from './report/ReportLocation';
import ReportDateTime from './report/ReportDateTime';
import ReportPersonInvolved from './report/ReportPersonInvolved';
import ReportAssistanceWitness from './report/ReportAssistanceWitness';
import ReportTypeOfDamage from './report/ReportTypeOfDamage';
import ReportLocationOfInjury from './report/ReportLocationOfInjury';
import ReportAddPicture from './report/ReportAddPicture';
import ReportAdditionalInformation from './report/ReportAdditionalInformation';

const ReportScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const maxSteps = 9;
  const stepSize = 1 / maxSteps;

  function handleStepNext() {
    if (currentStep + stepSize <= 1) {
      setCurrentStep(currentStep + stepSize);
    }
  }

  function handleStepPrevious() {
    if (currentStep - stepSize >= 0) {
      setCurrentStep(currentStep - stepSize);
    }
  }

  function resetCurrentStep() {
    setCurrentStep(0);
  }

  function renderStepDisplay(step: number) {
    const rStep = Math.round(step * 10) / 10;

    if (rStep === 0.0) {
      return <ReportCategory />;
    }
    if (rStep === 0.1) {
      return <ReportLocation />;
    }
    if (rStep === 0.2) {
      return <ReportDateTime />;
    }
    if (rStep === 0.3) {
      return <ReportPersonInvolved />;
    }
    if (rStep === 0.4) {
      return <ReportAssistanceWitness />;
    }
    if (rStep === 0.6) {
      return <ReportTypeOfDamage />;
    }
    if (rStep === 0.7) {
      return <ReportLocationOfInjury />;
    }
    if (rStep === 0.8) {
      return <ReportAddPicture />;
    }
    if (rStep === 0.9) {
      return <ReportAdditionalInformation />;
    }
    return <Text>Please try again</Text>;
  }

  return (
    <>
      <Header handleBack={handleStepPrevious} handleClose={resetCurrentStep} />

      <View style={sharedStyles.container}>
        <ProgressBar maxSteps={maxSteps} currentStep={currentStep} />
        {renderStepDisplay(currentStep)}
        <ButtonIncident title="Overslaan" method={handleStepNext} />
        <ButtonIncident title="Volgende" method={handleStepNext} style={{ marginTop: 10 }} />
      </View>
    </>
  );
};

export default ReportScreen;
