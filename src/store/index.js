import Vuex from 'vuex';
import Vue from 'vue';
import application from '@/store/application';
import data from '@/store/data';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    application,
    data,
  },
});
