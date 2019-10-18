import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import AuthenticationInterceptor from '@/utils/auth/AuthenticationInterceptor';
import DatabaseInterceptor from '@/utils/database/DatabaseInterceptor';

Vue.config.productionTip = false;

AuthenticationInterceptor();
DatabaseInterceptor();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
