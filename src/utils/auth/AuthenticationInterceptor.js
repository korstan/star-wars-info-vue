import Axios from 'axios';
import AppConfig from '@/AppConfig';

export default () => {
  Axios.interceptors.request.use(
    config => {
      let newConfig = { ...config };
      if (
        config.url.includes(AppConfig.endpoint.signIn) ||
        config.url.includes(AppConfig.endpoint.refreshToken)
      ) {
        console.log(newConfig);
        newConfig.params = { key: AppConfig.apiKey };
      }
      return newConfig;
    },
    err => {
      throw err;
    },
  );
};
