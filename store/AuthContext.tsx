import {
  useAutoDiscovery,
  AuthRequestConfig,
  useAuthRequest,
  makeRedirectUri,
  exchangeCodeAsync,
  TokenResponse,
  AccessTokenRequestConfig,
} from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as SecureStore from 'expo-secure-store';
import React, { createContext, useMemo, useCallback, useState, useEffect } from 'react';
import { CLIENT_ID, DISCOVERY_URL } from '../authConfig';

interface IAuthContext {
  getAccessToken: () => string;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  getAccessToken: () => '',
  isAuthenticated: false,
  login: () => undefined,
  logout: () => undefined,
});

const redirectUri = makeRedirectUri({ useProxy: true });
const clientId = CLIENT_ID;

const authRequestConfig: AuthRequestConfig = {
  clientId,
  scopes: ['openid', 'profile', 'email', 'offline_access'],
  redirectUri,
};

interface Props {
  children: React.ReactNode;
}

WebBrowser.maybeCompleteAuthSession();

const AuthContextProvider = ({ children }: Props) => {
  const discovery = useAutoDiscovery(DISCOVERY_URL);
  const [token, setToken] = useState<TokenResponse | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [request, response, promptAsync] = useAuthRequest(authRequestConfig, discovery);

  useEffect(() => {
    if (response?.type !== 'success') return;
    if (discovery === null) return;

    const accessTokenRequestConfig: AccessTokenRequestConfig = {
      clientId,
      code: response.params.code,
      redirectUri,
      extraParams: {
        code_verifier: request?.codeVerifier ? request.codeVerifier : '',
      },
    };

    exchangeCodeAsync(accessTokenRequestConfig, discovery)
      .then((tokenResponse) => {
        setToken(tokenResponse);
      })
      .catch((exchangeError) => {
        // Do something with the error
        console.error(exchangeError);
      });
  }, [discovery, request, response]);

  useEffect(() => {
    if (token === null) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [token]);

  const getAccessToken = useCallback(() => {
    return '';
  }, []);

  const logout = useCallback(async () => {
    setIsAuthenticated(false);
  }, [setIsAuthenticated]);

  const login = useCallback(async () => {
    promptAsync({ useProxy: true });
  }, [promptAsync]);

  const value = useMemo(
    () => ({ login, logout, getAccessToken, isAuthenticated }),
    [login, logout, isAuthenticated, getAccessToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
