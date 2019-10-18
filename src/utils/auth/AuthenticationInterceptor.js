import Axios from 'axios';
import AppConfig from '@/AppConfig';

export default () => {
  Axios.interceptors.request.use(
    config => {
      if (
        config.url.includes(AppConfig.endpoint.signIn) ||
        config.url.includes(AppConfig.endpoint.refreshToken)
      ) {
        return { ...config, params: { key: AppConfig.apiKey } };
      }
    },
    err => {
      throw err;
    },
  );
};
