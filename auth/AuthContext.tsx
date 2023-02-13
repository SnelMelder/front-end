import { TokenResponse } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import React, { createContext, useMemo, useCallback, useState, useEffect } from 'react';
import { clientId, discovery, redirectUri, scopes } from './authConfig';
import * as Storage from './tokenStorage';
import TokenUnavailableError from './TokenUnavailableError';
import promptAuthentication from './tokenExchange';

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

interface Props {
  children: React.ReactNode;
}

WebBrowser.maybeCompleteAuthSession(); // This is needed for users to be able to dismiss the web pop-up

const AuthContextProvider = ({ children }: Props) => {
  const [tokens, setTokens] = useState<TokenResponse | null>(null);

  const isAuthenticated = tokens !== null;

  useEffect(() => {
    Storage.retrieveTokens().then((config) => {
      setTokens(config);
    });
  }, []);

  const refreshTheTokens = useCallback(async () => {
    if (tokens === null) throw new TokenUnavailableError();

    await tokens.refreshAsync({ clientId, scopes }, discovery);

    Storage.saveTokens(tokens);
  }, [tokens]);

  const getAccessToken = useCallback(async () => {
    if (tokens === null) throw new TokenUnavailableError();

    if (tokens.shouldRefresh()) {
      await refreshTheTokens();
    }

    return tokens.accessToken;
  }, [tokens, refreshTheTokens]);

  const login = useCallback(async () => {
    const response = await promptAuthentication();

    if (response !== null) {
      setTokens(response);
      Storage.saveTokens(response);
    }
  }, []);

  const logout = useCallback(async () => {
    WebBrowser.openAuthSessionAsync(discovery.endSessionEndpoint, redirectUri);
    setTokens(null);
    Storage.deleteTokens();
  }, []);

  const value = useMemo(
    () => ({ login, logout, getAccessToken, isAuthenticated }),
    [login, logout, isAuthenticated, getAccessToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
