import firebase from 'firebase';
import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import firebaseConfig from '@/firebaseConfig';

Vue.config.productionTip = false;

let app = '';

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});
