import { TokenResponse } from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'tokens'; // key used in storage of token configuration

export const saveTokens = async (tokens: TokenResponse) => {
  AsyncStorage.setItem(key, JSON.stringify(tokens));
};

export const retrieveTokens = async () => {
  const tokensString = await AsyncStorage.getItem(key);

  if (tokensString === null) {
    return null;
  }

  return new TokenResponse(JSON.parse(tokensString));
};

export const deleteTokens = async () => {
  AsyncStorage.removeItem(key);
};
