import 'intl';
import 'intl/locale-data/jsonp/nl-NL';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './navigators/RootNavigator';
import AuthContextProvider from './auth/AuthContext';
import LightTheme from './themes/LightTheme';

const App = () => {
  return (
    <AuthContextProvider>
      <PaperProvider theme={LightTheme}>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <NavigationContainer theme={LightTheme}>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </AuthContextProvider>
  );
};

export default App;
