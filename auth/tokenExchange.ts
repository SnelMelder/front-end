import { AccessTokenRequestConfig, exchangeCodeAsync, AuthRequest, AuthRequestPromptOptions } from 'expo-auth-session';
import { discovery, clientId, redirectUri } from './authConfig';

const authRequestPromptOptions: AuthRequestPromptOptions = { useProxy: true };

const getTokenRequestConfig = (code: string, codeVerifier: string): AccessTokenRequestConfig => {
  return {
    clientId,
    code,
    redirectUri,
    extraParams: {
      code_verifier: codeVerifier,
    },
  };
};

const getCodeRequest = () => {
  return new AuthRequest({
    clientId,
    scopes: ['openid', 'profile', 'email', 'offline_access'],
    redirectUri,
  });
};

const promptAuthentication = async () => {
  const codeRequest = getCodeRequest();
  const codeResponse = await codeRequest.promptAsync(discovery, authRequestPromptOptions);

  if (codeResponse.type !== 'success') {
    return null;
  }

  const tokenRequestConfig = getTokenRequestConfig(codeResponse.params.code, codeRequest.codeVerifier as string);
  const tokenResponse = await exchangeCodeAsync(tokenRequestConfig, discovery);

  return tokenResponse;
};

export default promptAuthentication;