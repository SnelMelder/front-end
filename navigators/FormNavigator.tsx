import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-paper';
import ReportFormContextProvider from '../store/ReportFormContext';
import ReportCategory from '../screens/report/ReportCategory';
import ReportLocation from '../screens/report/ReportLocation';
import ReportDateTime from '../screens/report/ReportDateTime';
import ReportPersonInvolved from '../screens/report/ReportPersonInvolved';
import ReportAssistanceWitness from '../screens/report/ReportAssistanceWitness';
import ReportTypeOfDamage from '../screens/report/ReportTypeOfDamage';
import ReportAddPicture from '../screens/report/ReportAddPicture';
import ReportAdditionalInformation from '../screens/report/ReportAdditionalInformation';
import ReportSummary from '../screens/report/ReportSummary';
import ReportIncidentOther from '../screens/report/ReportIncidentOther';
import ReportLocationOfInjury from '../screens/report/ReportLocationOfInjury';
import SendingScreen from '../screens/report/SendingScreen';
import SuccessScreen from '../screens/report/SuccessScreen';

const Stack = createNativeStackNavigator();

const FormNavigator = () => {
  const { colors } = useTheme();

  return (
    <ReportFormContextProvider>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerStyle: {
            backgroundColor: colors.surfaceVariant,
          },
          headerTintColor: colors.onSurfaceVariant,
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

export default FormNavigator;
