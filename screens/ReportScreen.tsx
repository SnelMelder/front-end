import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView } from 'react-native';
import Header from '../components/Header/Header';
import { RootTabScreenProps } from '../types';

import ReportFormContextProvider from '../store/ReportFormContext';

import ReportCategory from './report/ReportCategory';
import ReportLocation from './report/ReportLocation';
import ReportDateTime from './report/ReportDateTime';
import ReportPersonInvolved from './report/ReportPersonInvolved';
import ReportAssistanceWitness from './report/ReportAssistanceWitness';
import ReportTypeOfDamage from './report/ReportTypeOfDamage';
import ReportAddPicture from './report/ReportAddPicture';
import ReportAdditionalInformation from './report/ReportAdditionalInformation';
import ReportSummary from './report/ReportSummary';
import ReportIncidentOther from './report/ReportIncidentOther';
import ReportLocationOfInjury from './report/ReportLocationOfInjury';

const Stack = createNativeStackNavigator();

const ReportScreen = ({ navigation }: RootTabScreenProps<'TabReport'>) => {
  function previousStepHandler() {
    // TODO: implement
  }

  function closeReport() {
    navigation.navigate('Root', { screen: 'TabHome' });
  }

  return (
    <>
      <SafeAreaView>
        <Header handleBack={previousStepHandler} handleClose={closeReport} />
      </SafeAreaView>
      <ReportFormContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="ReportCategory" component={ReportCategory} />
          <Stack.Screen name="ReportIncidentOther" component={ReportIncidentOther} />
          <Stack.Screen name="ReportLocation" component={ReportLocation} />
          <Stack.Screen name="ReportDateTime" component={ReportDateTime} />
          <Stack.Screen name="ReportPersonInvolved" component={ReportPersonInvolved} />
          <Stack.Screen name="ReportAssistanceWitness" component={ReportAssistanceWitness} />
          <Stack.Screen name="ReportTypeOfDamage" component={ReportTypeOfDamage} />
          <Stack.Screen name="ReportLocationOfInjury" component={ReportLocationOfInjury} />
          <Stack.Screen name="ReportAddPicture" component={ReportAddPicture} />
          <Stack.Screen name="ReportAdditionalInformation" component={ReportAdditionalInformation} />
          <Stack.Screen name="ReportSummary" component={ReportSummary} />
        </Stack.Navigator>
      </ReportFormContextProvider>
    </>
  );
};

export default ReportScreen;
