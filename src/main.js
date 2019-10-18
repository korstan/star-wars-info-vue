import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import AuthenticationInterceptor from '@/utils/auth/AuthenticationInterceptor';

Vue.config.productionTip = false;

AuthenticationInterceptor();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
