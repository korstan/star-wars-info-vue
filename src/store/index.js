import Vuex from 'vuex';
import Vue from 'vue';
import application from '@/store/application';
import characters from '@/store/characters';
import films from '@/store/films';
import planets from '@/store/planets';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    application,
    characters,
    films,
    planets,
  },
});
