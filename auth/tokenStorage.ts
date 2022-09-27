import { TokenResponseConfig } from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tokenConfigKey = 'tokenConfig'; // key used in storage of token configuration

export const saveTokenConfig = async (tokenConfig: TokenResponseConfig) => {
  AsyncStorage.setItem(tokenConfigKey, JSON.stringify(tokenConfig));
};

export const retrieveTokenConfig = async () => {
  const tokenConfigString = await AsyncStorage.getItem(tokenConfigKey);

  if (tokenConfigString === null) {
    return null;
  }

  return JSON.parse(tokenConfigString);
};
