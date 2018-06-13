import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router);

function load(component) {
  /* eslint-disable no-undef */
  return () => System.import(`@/${component}.vue`);
}

const router = new Router({
  root: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: load('components/views/main'),
      children: [
        {
          path: '',
          name: 'home',
          component: load('components/views/home'),
          meta: {
            scope: 'authorized',
            appearance: 'slide-top-to-bottom'
          }
        },
        {
          path: 'sign-in',
          name: 'signin',
          component: load('components/views/sign-in'),
          meta: {
            scope: 'anonymous',
            title: 'Sign In',
            appearance: 'slide-top-to-bottom'
          }
        },
        {
          path: 'forms',
          component: load('components/views/abstract'),
          children: [
            {
              path: '',
              name: 'forms',
              component: load('components/views/forms'),
              meta: {
                scope: 'authorized',
                title: 'Forms',
                appearance: 'slide-top-to-bottom'
              }
            },
            {
              path: ':id',
              name: 'form',
              component: load('components/views/form'),
              meta: {
                scope: 'authorized',
                title: 'Form',
                appearance: 'slide-right-to-left'
              }
            }
          ]
        },
        {
          path: 'form-builder',
          name: 'form-builder',
          component: load('components/views/form-builder'),
          meta: {
            scope: 'authorized',
            title: 'Form Builder',
            appearance: 'slide-top-to-bottom'
          }
        }
      ]
    },
    {path: '*', redirect: '/'}
  ]
});

router.beforeEach((to, from, next) => {
  Vue.prototype.$Progress.start();
  // Check route require authorize
  const isLogged = store.getters['oauth/checkLogged'];
  const scope = to.meta.scope;
  console.info(`from: ${from.name} to: ${to.name}`);
  if (scope === 'authorized' && !isLogged) {
    next({ name: 'signin' });
  } else if (scope === 'anonymous' && isLogged) {
    next({ name: 'home' });
  } else {
    next();
  }
});
router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish();
  document.title = to.meta.title ? `${to.meta.title} | EMR` : 'EMR';
});

export default router;
