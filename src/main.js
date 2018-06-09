import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueMoment from 'vue-moment';
import InfiniteLoading from 'vue-infinite-loading';
import vmodal from 'vue-js-modal';
import VueProgressBar from 'vue-progressbar';
import App from './App';
import Spinner from './components/global/spinner/spinner';
import Btn from './components/global/btn/btn';
import focus from './directives/focus.directive';
import router from './router';
import store from './store';
import setupInterceptors from './utils/interceptors';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(VueMoment);
Vue.use(vmodal, { dynamic: true });
Vue.use(VueProgressBar, {
  color: '#ddd',
  failedColor: '#dd475a',
  thickness: '3px',
  transition: {
    speed: '1.2s',
    opacity: '0.2s',
    termination: 1200
  },
  autoRevert: true,
  location: 'top',
  inverse: false
});
Vue.component('infinite-loading', InfiniteLoading);
Vue.component('spinner', Spinner);
Vue.component('btn', Btn);
Vue.directive('focus', focus);
setupInterceptors();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
