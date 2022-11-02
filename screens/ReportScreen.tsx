import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
import COLORS from '../constants/Colors';
import SendingScreen from './report/SendingScreen';
import SuccessScreen from './report/SuccessScreen';

const Stack = createNativeStackNavigator();

const ReportScreen = () => {
  return (
    <ReportFormContextProvider>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerStyle: {
            backgroundColor: COLORS.primary500,
          },
          headerTintColor: COLORS.white,
        }}
      >
        <Stack.Screen name="ReportCategory" component={ReportCategory} options={{ title: 'Soort incident' }} />
        <Stack.Screen
          name="ReportIncidentOther"
          component={ReportIncidentOther}
          options={{ title: 'Soort incident: Overig' }}
        />
        <Stack.Screen name="ReportLocation" component={ReportLocation} options={{ title: 'Locatie' }} />
        <Stack.Screen name="ReportDateTime" component={ReportDateTime} options={{ title: 'Datum en tijd' }} />
        <Stack.Screen
          name="ReportPersonInvolved"
          component={ReportPersonInvolved}
          options={{ title: 'Betrokken personen' }}
        />
        <Stack.Screen
          name="ReportAssistanceWitness"
          component={ReportAssistanceWitness}
          options={{ title: 'Getuigen en hulpverleners' }}
        />
        <Stack.Screen name="ReportTypeOfDamage" component={ReportTypeOfDamage} options={{ title: 'Soort schade' }} />
        <Stack.Screen
          name="ReportLocationOfInjury"
          component={ReportLocationOfInjury}
          options={{ title: 'Plaats verwonding' }}
        />
        <Stack.Screen name="ReportAddPicture" component={ReportAddPicture} options={{ title: "Foto's" }} />
        <Stack.Screen
          name="ReportAdditionalInformation"
          component={ReportAdditionalInformation}
          options={{ title: 'Overige informatie' }}
        />
        <Stack.Screen name="ReportSummary" component={ReportSummary} options={{ title: 'Samenvatting' }} />
        <Stack.Screen
          name="SendingScreen"
          component={SendingScreen}
          options={{ headerShown: false, animation: 'none' }}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{ headerShown: false, animation: 'none' }}
        />
      </Stack.Navigator>
    </ReportFormContextProvider>
  );
};

export default ReportScreen;
