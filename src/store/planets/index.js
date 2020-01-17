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
    FETCH_ALL_PLANETS: async ({ commit }) => {
      const allPlanets = await fetchDataArray(databaseRefString);
      commit('SET_ALL_PLANETS', allPlanets);
    },
    FETCH_PLANET_BY_ID: async ({ commit }, id) => {
      const planet = await fetchDataById(databaseRefString, id);
      commit('SET_CURRENT_PLANET', planet);
    },
  },
  mutations: {
    SET_ALL_PLANETS: (state, allPlanets) => (state.allPlanets = allPlanets),
    SET_CURRENT_PLANET: (state, currentPlanet) => (state.currentPlanet = currentPlanet),
  },
};
