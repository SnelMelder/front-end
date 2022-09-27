class TokenUnavailableError extends Error {
  constructor() {
    super('You can only request an access token when the user is signed in');
  }
}

export default TokenUnavailableError;
