import {
  fetchDataArray,
  fetchDataById,
} from '@/utils/databaseService';

const databaseRefString = 'films';

export default {
  namespaced: true,
  state: {
    allFilms: [],
    currentFilm: {},
  },
  getters: {
    // getMappedFilms: (state, getters) => getters.getAllFilms.map(item => ({
    //   uid: item.uid,
    //   release_date: item.release_date,
    //   episode_id: item.episode_id,
    //   title: item.title,
    //   director: item.director,
    // })),
  },
  actions: {
    FETCH_ALL_FILMS: async ({ commit }) => {
      const allFilms = await fetchDataArray(databaseRefString);
      commit('SET_ALL_FILMS', allFilms);
    },
    FETCH_FILM_BY_ID: async ({ commit }, id) => {
      const film = await fetchDataById(databaseRefString, id);
      commit('SET_CURRENT_FILM', film);
    },
  },
  mutations: {
    SET_ALL_FILMS: (state, allFilms) => (state.allFilms = allFilms),
    SET_CURRENT_FILM: (state, currentFilm) => (state.currentFilm = currentFilm),
  },
};
