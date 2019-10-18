import Axios from 'axios';
import AppConfig from '@/AppConfig';
import TokensHelper from '@/utils/TokensHelper';

export default {
  async UserSignIn({ email, password }) {
    return await Axios.post(AppConfig.endpoint.signIn, {
      email,
      password,
      returnSecureToken: true,
    })
      .then(({ data }) =>
        TokensHelper.SetTokens(data.idToken, data.refreshToken),
      )
      .catch(error => {
        throw error;
      });
  },
  UserSignOut() {
    TokensHelper.RemoveTokens();
  },
  async UserSignUp({ email, password }) {
    return await Axios.post(AppConfig.endpoint.sign, {
      email,
      password,
      returnSecureToken: true,
    })
      .then(({ data }) =>
        TokensHelper.SetTokens(data.id_token, data.refresh_token),
      )
      .catch(error => {
        throw error;
      });
  },
};
