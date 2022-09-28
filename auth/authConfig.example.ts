import { makeRedirectUri } from 'expo-auth-session';

const TENANT_ID = 'your-azure-tenant-id';

export const redirectUri = makeRedirectUri({ useProxy: true });
export const clientId = 'your-application-client-id-from-active-directory';
export const discovery = {
  authorizationEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize`,
  tokenEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
  endSessionEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/logout?client_id=${clientId}`,
};
