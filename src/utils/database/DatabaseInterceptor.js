import Axios from 'axios';
import AppConfig from '@/AppConfig';
import TokensHelper from '@/utils/TokensHelper';

export default () => {
  Axios.interceptors.request.use(config => {
    let newConfig = { ...config };
    if (config.url.includes(AppConfig.endpoint.database)) {
      newConfig.params = { auth: TokensHelper.GetIdToken() };
    }
    return newConfig;
  });
};
