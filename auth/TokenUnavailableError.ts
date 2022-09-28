class TokenUnavailableError extends Error {
  constructor() {
    super('You can only request access tokens when the user is signed in');
  }
}

export default TokenUnavailableError;
