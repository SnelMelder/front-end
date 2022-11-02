import 'intl';
import 'intl/locale-data/jsonp/nl-NL';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import AuthContextProvider from './auth/AuthContext';
import COLORS from './constants/Colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary500,
    accent: COLORS.primary500,
  },
};

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <AuthContextProvider>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <Navigation />
        </SafeAreaProvider>
      </PaperProvider>
    </AuthContextProvider>
  );
};

export default App;
