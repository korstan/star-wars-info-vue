import firebase from 'firebase';
import Vue from 'vue';

import App from '@/App';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

let app = '';

firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});
