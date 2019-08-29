import {
  fetchDataArray,
  fetchDataById,
} from '@/app/core/services/databaseService';
import {
  FETCH_ALL_FILMS,
  FETCH_FILM_BY_ID,
  SET_ALL_FILMS,
  SET_CURRENT_FILM,
} from '@/app/films/store/types';

const state = {
  allFilms: [],
  currentFilm: {},
};

const getters = {
  getAllFilms: state => state.allFilms,
  getCurrentFilm: state => state.currentFilm,
  // getMappedFilms: (state, getters) => getters.getAllFilms.map(item => ({
  //   uid: item.uid,
  //   release_date: item.release_date,
  //   episode_id: item.episode_id,
  //   title: item.title,
  //   director: item.director,
  // })),
};

const actions = {
  [FETCH_ALL_FILMS]: async ({ commit }) => {
    const allFilms = await fetchDataArray('films');
    commit(SET_ALL_FILMS, allFilms);
  },
  [FETCH_FILM_BY_ID]: async ({ commit }, id) => {
    const film = await fetchDataById('films', id);
    commit(SET_CURRENT_FILM, film);
  },
};

const mutations = {
  [SET_ALL_FILMS]: (state, allFilms) => (state.allFilms = allFilms),
  [SET_CURRENT_FILM]: (state, currentFilm) => (state.currentFilm = currentFilm),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
