const state = {
  isSidebarOpened: null
};

const getters = {
  isSidebarOpened: state => state.isSidebarOpened
};

const actions = {
  toggleSidebar({ commit, state }) {
    commit(
      'setSidebarOpenedStatus',
      !state.isSidebarOpened
    );
  }
};

const mutations = {
  setSidebarOpenedStatus(state, status) {
    state.isSidebarOpened = status;
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
