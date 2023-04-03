import { makeRedirectUri } from 'expo-auth-session';
import Constants from 'expo-constants';

const TENANT_ID = 'cdeed8c9-dd14-4981-8012-90cf0b210955';

export const redirectUri = makeRedirectUri({
  scheme: Constants.manifest?.scheme,
  path: 'auth',
});
export const clientId = '91db0c11-5d65-4a69-948e-8bc1e90194a7';
export const discovery = {
  authorizationEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize`,
  tokenEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
  endSessionEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/logout?client_id=${clientId}`,
};

export const scopes = ['api://snelmelder/locations:read', 'api://snelmelder/reports:create', 'offline_access'];
