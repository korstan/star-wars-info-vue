const state = {
  menuVisible: false,
};

const getters = {
  getMenuVisible: state => state.menuVisible,
};

const actions = {
  TOGGLE_MENU_VISIBLE: ({ commit }) => {
    commit('SET_MENU_VISIBLE');
  },
};

const mutations = {
  SET_MENU_VISIBLE: (state) => (state.menuVisible = !state.menuVisible),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
