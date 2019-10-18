export default {
  SetTokens(idToken, refreshToken) {
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('refreshToken', refreshToken);
  },
  GetIdToken() {
    return localStorage.getItem('idToken');
  },
  GetRefreshToken() {
    return localStorage.getItem('refreshToken');
  },
  RemoveTokens() {
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
  },
};
