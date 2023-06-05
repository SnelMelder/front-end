import { makeRedirectUri } from 'expo-auth-session';
import Constants from 'expo-constants';

const TENANT_ID = '81187212-6cd2-41cc-9dde-0ce71a9cc1ef';

export const redirectUri = makeRedirectUri({
  scheme: Constants.manifest?.scheme,
  path: 'auth',
});
export const clientId = '6f0320e2-a945-4c4e-811b-469ce101feb8';
export const discovery = {
  authorizationEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize`,
  tokenEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
  endSessionEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/logout?client_id=${clientId}`,
};

export const scopes = ['api://snelmelder/locations:read', 'api://snelmelder/reports:create', 'offline_access'];
