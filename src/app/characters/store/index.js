import {
  fetchDataArray,
  fetchDataById
} from '@/app/core/services/databaseService';
import {
  FETCH_ALL_CHARACTERS,
  FETCH_CHARACTER_BY_ID,
  SET_ALL_CHARACTERS,
  SET_CURRENT_CHARACTER
} from '@/app/characters/store/types';

const state = {
  allCharacters: [],
  currentCharacter: {}
};

const getters = {
  getAllCharacters: state => state.allCharacters,
  getCurrentCharacter: state => state.currentCharacter,
  getSelectedCharacters: state => charactersIdsArray => {
    return state.allCharacters.filter(
      (char, i) => charactersIdsArray.indexOf(i + 1) !== -1
    );
  }
  // getMappedCharacters: (state, getters) => getters.getAllCharacters.map(item => ({
  //   uid: item.uid,
  //   name: item.name,
  // }))
};

const actions = {
  [FETCH_ALL_CHARACTERS]: async ({ commit }) => {
    const allCharacters = await fetchDataArray('people');
    commit(SET_ALL_CHARACTERS, allCharacters);
  },
  [FETCH_CHARACTER_BY_ID]: async ({ commit }, id) => {
    const character = await fetchDataById('people', id);
    commit(SET_CURRENT_CHARACTER, character);
  }
};

const mutations = {
  [SET_ALL_CHARACTERS]: (state, allCharacters) =>
    (state.allCharacters = allCharacters),
  [SET_CURRENT_CHARACTER]: (state, currentCharacter) =>
    (state.currentCharacter = currentCharacter)
};

export default {
  state,
  getters,
  actions,
  mutations
};
