import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import AuthContextProvider from './auth/AuthContext';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Navigation />
      </SafeAreaProvider>
    </AuthContextProvider>
  );
};

export default App;
