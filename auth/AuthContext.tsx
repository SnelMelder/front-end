import { useAuthRequest, TokenResponse } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import React, { createContext, useMemo, useCallback, useState, useEffect } from 'react';
import { clientId, discovery, redirectUri } from './authConfig';
import useAutoExchange from './tokenExchange';
import { saveTokenConfig, retrieveTokenConfig } from './tokenStorage';
import TokenUnavailableError from './TokenUnavailableError';

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
  const [tokenConfig, setTokenConfig] = useState<TokenResponse | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [authRequest, authResponse, promptAsync] = useAuthRequest(authRequestConfig, discovery);

  const tokenResponse = useAutoExchange(
    authResponse?.type === 'success' ? authResponse.params.code : undefined,
    authRequest?.codeVerifier
  );

  useEffect(() => {
    if (tokenConfig === null) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [tokenConfig]);

  useEffect(() => {
    if (tokenResponse !== null) {
      setTokenConfig(tokenResponse);
      saveTokenConfig(tokenResponse);
    }
  }, [tokenResponse]);

  useEffect(() => {
    retrieveTokenConfig().then((config) => {
      setTokenConfig(config);
    });
  }, []);

  const refreshTheTokens = useCallback(async () => {
    if (tokenConfig === null) return;

    const response = new TokenResponse(tokenConfig);

    await response.refreshAsync({ clientId }, discovery);

    setTokenConfig(response);
    saveTokenConfig(response);
  }, [tokenConfig]);

  const getAccessToken = useCallback(async () => {
    if (tokenConfig === null) throw new TokenUnavailableError();

    // TODO: Reset this back
    if (true) {
      await refreshTheTokens();
    }

    return tokenConfig.accessToken;
  }, [tokenConfig, refreshTheTokens]);

  const login = useCallback(async () => {
    promptAsync({ useProxy: true });
  }, [promptAsync]);

  const logout = useCallback(async () => {
    WebBrowser.openAuthSessionAsync(discovery.endSessionEndpoint, redirectUri);
    setTokenConfig(null);
  }, []);

  const value = useMemo(
    () => ({ login, logout, getAccessToken, isAuthenticated }),
    [login, logout, isAuthenticated, getAccessToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
