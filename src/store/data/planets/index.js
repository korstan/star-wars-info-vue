import {
  fetchDataArray,
  fetchDataById,
} from '@/utils/databaseService';

const databaseRefString = 'planets';

export default {
  namespaced: true,
  state: {
    allPlanets: [],
    currentPlanet: {},
  },
  getters: {},
  actions: {
    FETCH_ALL_PLANETS: async ({ commit, dispatch }) => {
      const allPlanets = await dispatch('data/FETCH_ALL_DATA', databaseRefString, { root: true });
      commit('SET_ALL_PLANETS', allPlanets);
    },
    FETCH_PLANET_BY_ID: async ({ commit, dispatch }, id) => {
      const planet = await dispatch('data/FETCH_DATA_BY_ID', {databaseRefString, id}, {root: true});
      commit('SET_CURRENT_PLANET', planet);
    },
  },
  mutations: {
    SET_ALL_PLANETS: (state, allPlanets) => (state.allPlanets = allPlanets),
    SET_CURRENT_PLANET: (state, currentPlanet) => (state.currentPlanet = currentPlanet),
  },
};
