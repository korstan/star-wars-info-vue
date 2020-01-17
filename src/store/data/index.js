import films from '@/store/data/films';
import characters from '@/store/data/characters';
import planets from '@/store/data/planets';

import { fetchDataArray, fetchDataById } from '@/utils/databaseService';

import FetchStatus from '@/utils/FetchStatusEnum';

export default {
  namespaced: true,
  modules: { films, characters, planets },

  state: {
    fetchStatus: FetchStatus.INIT,
  },
  getters: {},
  actions: {
    FETCH_ALL_DATA: async ({ commit }, databaseRefString) => {
      commit('SET_FETCH_STATUS', FetchStatus.LOADING);
      try {
        const data = await fetchDataArray(databaseRefString);
        commit('SET_FETCH_STATUS', FetchStatus.DONE);
        return data;
      } catch {
        commit('SET_FETCH_STATUS', FetchStatus.ERROR);
      }
    },
    FETCH_DATA_BY_ID: async ({ commit }, {databaseRefString, id}) => {
      commit('SET_FETCH_STATUS', FetchStatus.LOADING);
      try {
        const data = await fetchDataById(databaseRefString, id);
        commit('SET_FETCH_STATUS', FetchStatus.DONE);
        return data;
      } catch {
        commit('SET_FETCH_STATUS', FetchStatus.ERROR);
      }
    },
  },
  mutations: {
    SET_FETCH_STATUS: (state, fetchStatus) => (state.fetchStatus = fetchStatus),
  },
};
