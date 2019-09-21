import {
  fetchDataArray,
  fetchDataById
} from '@/app/core/services/databaseService';

export default {
  namespaced: true,
  state: {
    allCharacters: [],
    currentCharacter: {}
  },
  getters: {
    getSelectedCharacters: state => charactersIdsArray => {
      return state.allCharacters.filter(
        (char, i) => charactersIdsArray.indexOf(i + 1) !== -1
      );
    }
    // getMappedCharacters: (state, getters) => getters.getAllCharacters.map(item => ({
    //   uid: item.uid,
    //   name: item.name,
    // }))
  },
  actions: {
    FETCH_ALL_CHARACTERS: async ({ commit }) => {
      const allCharacters = await fetchDataArray('people');
      commit('SET_ALL_CHARACTERS', allCharacters);
    },
    FETCH_CHARACTER_BY_ID: async ({ commit }, id) => {
      const character = await fetchDataById('people', id);
      commit('SET_CURRENT_CHARACTER', character);
    }
  },
  mutations: {
    SET_ALL_CHARACTERS: (state, allCharacters) =>
      (state.allCharacters = allCharacters),
    SET_CURRENT_CHARACTER: (state, currentCharacter) =>
      (state.currentCharacter = currentCharacter)
  },
};
