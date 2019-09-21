import Vuex from 'vuex';
import Vue from 'vue';
import application from '@/store/application';
import characters from '@/app/characters/store';
import films from '@/app/films/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    application,
    characters,
    films,
  },
});
