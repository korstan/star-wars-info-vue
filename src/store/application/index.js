export default {
  namespaced: true,
  state: {
    isMenuVisible: false,
  },
  getters: {},
  actions: {
    TOGGLE_IS_MENU_VISIBLE: ({ commit, state }) => {
      commit('SET_IS_MENU_VISIBLE', !state.isMenuVisible);
    },
  },
  mutations: {
    SET_IS_MENU_VISIBLE: (state, isMenuVisible) =>
      (state.isMenuVisible = isMenuVisible),
  },
};
