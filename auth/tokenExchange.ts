import { useEffect, useState } from 'react';
import { TokenResponse, AccessTokenRequestConfig, exchangeCodeAsync } from 'expo-auth-session';
import { discovery, clientId, redirectUri } from './authConfig';

const getAccessTokenRequestConfig = (code: string, codeVerifier: string): AccessTokenRequestConfig => {
  return {
    clientId,
    code,
    redirectUri,
    extraParams: {
      code_verifier: codeVerifier,
    },
  };
};

const useAutoExchange = (code?: string, codeVerifier?: string) => {
  const [tokenResponse, setTokenResponse] = useState<TokenResponse | null>(null);

  useEffect(() => {
    if (!code || !codeVerifier) {
      setTokenResponse(null);
      return;
    }

    const config = getAccessTokenRequestConfig(code, codeVerifier);

    exchangeCodeAsync(config, discovery)
      .then((response) => {
        setTokenResponse(response);
      })
      .catch((exchangeError) => {
        // TODO: do something with the error
        console.error(exchangeError);
      });
  }, [code, codeVerifier]);

  return tokenResponse;
};

export default useAutoExchange;
