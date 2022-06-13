import React, { useState } from 'react';

import { SafeAreaView } from 'react-native';
import sharedStyles from './shared.scss';

import Header from '../components/Header/Header';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import ButtonIncident from '../components/ButtonIncident/ButtonIncident';
import { Text, View } from '../components/Themed';

import ReportCategory from './report/ReportCategory';
import ReportIncidentOther from './report/ReportIncidentOther';
import ReportLocation from './report/ReportLocation';
import ReportDateTime from './report/ReportDateTime';
import ReportPersonInvolved from './report/ReportPersonInvolved';
import ReportAssistanceWitness from './report/ReportAssistanceWitness';
import ReportTypeOfDamage from './report/ReportTypeOfDamage';
// import ReportLocationOfInjury from './report/ReportLocationOfInjury';
import ReportAddPicture from './report/ReportAddPicture';
import ReportAdditionalInformation from './report/ReportAdditionalInformation';
import ReportSummary from './report/ReportSummary';
import { RootTabScreenProps } from '../types';

const ReportScreen = ({ navigation }: RootTabScreenProps<'TabReport'>) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleHidden, setVisibleHidden] = useState(Boolean);
  const maxSteps = 10;
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

  function getVisibility() {
    if (currentStep < 0.8) {
      return {
        display: 'initial',
      };
    }
    return {
      display: 'none',
    };
  }

  function closeReport() {
    navigation.navigate('Root', { screen: 'TabHome' });
  }

  function renderStepDisplay(step: number) {
    const rStep = Math.round(step * 10) / 10;
    const progressBar = <ProgressBar maxSteps={maxSteps} currentStep={currentStep} />;

    if (rStep === 0.0) {
      return (
        <>
          {progressBar}
          <ReportCategory />
        </>
      );
    }
    if (rStep === 0.1) {
      return (
        <>
          {progressBar}
          <ReportLocation />
        </>
      );
    }

    if (rStep === 0.2) {
      return (
        <>
          {progressBar}
          <ReportDateTime />
        </>
      );
    }

    if (rStep === 0.3) {
      return (
        <>
          {progressBar}
          <ReportPersonInvolved />
        </>
      );
    }

    if (rStep === 0.4) {
      return (
        <>
          {progressBar}
          <ReportAssistanceWitness />
        </>
      );
    }

    if (rStep === 0.5) {
      return (
        <>
          {progressBar}
          <ReportAssistanceWitness />
        </>
      );
    }

    if (rStep === 0.6) {
      return (
        <>
          {progressBar}
          <ReportTypeOfDamage />
        </>
      );
    }
    if (rStep === 0.7) {
      return (
        <>
          {progressBar}
          <ReportAddPicture />
        </>
      );
    }
    if (rStep === 0.8) {
      return (
        <>
          {progressBar}
          <ReportAdditionalInformation />
        </>
      );
    }
    if (rStep === 0.9) {
      return <ReportSummary />;
    }
    return <Text>Please try again</Text>;
  }

  return (
    <>
      <SafeAreaView>
        <Header handleBack={handleStepPrevious} handleClose={closeReport} />
      </SafeAreaView>
      <View style={sharedStyles.container}>
        {renderStepDisplay(currentStep)}
        <View style={[sharedStyles.report_screen_buttons, getVisibility()]}>
          <ButtonIncident title="Volgende" method={handleStepNext} />
          <ButtonIncident title="Overslaan" style={{ marginTop: 10 }} method={handleStepNext} />
        </View>
      </View>
    </>
  );
};

export default ReportScreen;
