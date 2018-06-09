import api from '@/api';
import router from '@/router';

const state = {
  refreshToken: localStorage.getItem('refreshToken'),
  expires: localStorage.getItem('expiresAt'),
  accessToken: localStorage.getItem('accessToken')
};

const getters = {
  getAccessToken: state => state.accessToken,
  getRefreshToken: state => state.refreshToken,
  checkLogged: state => state.accessToken != null && state.expires > Date.now()
};

const actions = {
  init({ dispatch, state }) {
    if (state.expires && state.expires <= Date.now()) {
      dispatch('refreshToken');
    } else if (state.accessToken) {
      dispatch('user/getCurrentUser', {}, {root: true});
    }
  },
  async authorize({ commit, dispatch }, credentials) {
    const response = await api.authorize(credentials);
    commit('setTokenDetails', response);
    dispatch('user/getCurrentUser', {}, {root: true});
    return response;
  },
  refreshToken({ dispatch, state, commit }) {
    api.refreshToken(state.refreshToken)
      .then(data => {
        commit('setTokenDetails', data);
      }, () => {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
      });
  },
  signOut({ state, commit }) {
    commit('logout');
    router.push({name: 'signin'});
  }
};

const mutations = {
  setTokenDetails(state, data) {
    state.accessToken = data.access_token;
    state.refreshToken = data.refresh_token;
    state.expires = Date.now() + (parseInt(data.expires_at, 10) * 1000);

    localStorage.setItem('expiresAt', state.expires);
    localStorage.setItem('accessToken', state.accessToken);
    localStorage.setItem('refreshToken', state.refreshToken);
  },
  logout(state) {
    state.accessToken = null;
    localStorage.removeItem('accessToken');
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
