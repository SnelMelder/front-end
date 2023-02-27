import { makeRedirectUri } from 'expo-auth-session';
import Constants from 'expo-constants';

const TENANT_ID = 'b0ad87a1-0f53-4ca9-a2f2-a0e1b926e061';

export const redirectUri = makeRedirectUri({
  scheme: Constants.manifest?.scheme,
  path: 'auth',
});
export const clientId = 'd9b7bd67-1432-4657-9329-d94b7b35e50e';
export const discovery = {
  authorizationEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize`,
  tokenEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
  endSessionEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/logout?client_id=${clientId}`,
};

export const scopes = ['api://snelmelder/locations:read', 'api://snelmelder/reports:create', 'offline_access'];
