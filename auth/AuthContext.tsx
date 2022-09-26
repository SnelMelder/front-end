import { useAuthRequest, TokenResponse } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import React, { createContext, useMemo, useCallback, useState, useEffect } from 'react';
import { clientId, discovery, redirectUri } from './authConfig';
import useAutoExchange from './tokenExchange';

interface IAuthContext {
  getAccessToken: () => Promise<string>;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  getAccessToken: async () => '',
  isAuthenticated: false,
  login: () => undefined,
  logout: () => undefined,
});

const authRequestConfig = {
  clientId,
  scopes: ['openid', 'profile', 'email', 'offline_access'],
  redirectUri,
};

interface Props {
  children: React.ReactNode;
}

WebBrowser.maybeCompleteAuthSession(); // This is needed for users to be able to dismiss the web pop-up

const AuthContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState<TokenResponse | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [authRequest, authResponse, promptAsync] = useAuthRequest(authRequestConfig, discovery);

  const tokenResponse = useAutoExchange(
    authResponse?.type === 'success' ? authResponse.params.code : undefined,
    authRequest?.codeVerifier
  );

  useEffect(() => {
    setToken(tokenResponse);
  }, [tokenResponse]);

  useEffect(() => {
    if (token === null) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [token]);

  const refreshToken = useCallback(async () => {
    token?.refreshAsync({ clientId }, discovery);
  }, [token]);

  const getAccessToken = useCallback(async () => {
    if (token === null) {
      throw new Error('Access token requested while signed out');
    }

    if (token.shouldRefresh()) {
      await refreshToken();
    }

    return token.accessToken;
  }, [token, refreshToken]);

  const logout = useCallback(async () => {
    WebBrowser.openAuthSessionAsync(`${discovery.endSessionEndpoint}?client_id=${clientId}`, redirectUri);
    setToken(null);
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
