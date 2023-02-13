import { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import FormNavigator from './FormNavigator';
import LoginScreen from '../screens/LoginScreen';
import { AuthContext } from '../auth/AuthContext';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        // User is signed in
        <>
          <Stack.Screen name="Root" component={TabNavigator} />
          <Stack.Screen name="ReportForm" component={FormNavigator} />
        </>
      ) : (
        // User is not signed in
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
