import Vuex from 'vuex';
import Vue from 'vue';
import Characters from '@/app/characters/store';
import Films from '@/app/films/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Characters,
    Films,
  },
});
