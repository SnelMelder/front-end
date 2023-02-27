import { AccessTokenRequestConfig, exchangeCodeAsync, AuthRequest, AuthRequestPromptOptions } from 'expo-auth-session';
import { discovery, clientId, redirectUri, scopes } from './authConfig';

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
    scopes,
    redirectUri,
  });
};

const promptAuthentication = async () => {
  const codeRequest = getCodeRequest();
  const codeResponse = await codeRequest.promptAsync(discovery);

  if (codeResponse.type !== 'success') {
    return null;
  }

  const tokenRequestConfig = getTokenRequestConfig(codeResponse.params.code, codeRequest.codeVerifier as string);
  const tokenResponse = await exchangeCodeAsync(tokenRequestConfig, discovery);

  console.log(tokenResponse);
  return tokenResponse;
};

export default promptAuthentication;
