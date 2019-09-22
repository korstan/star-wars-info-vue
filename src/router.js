import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';
import AppLogin from '@/views/AppLogin';
import AppHome from '@/views/AppHome';
import AppFilms from '@/views/AppFilms';
import AppFilmsDetails from '@/views/AppFilmsDetails';
import AppCharacters from '@/views/AppCharacters';
import AppCharactersDetails from '@/views/AppCharactersDetails';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: AppHome,
      children: [
        {
          path: 'films',
          name: 'films',
          component: AppFilms,
        },
        {
          path: 'films/:id',
          name: 'filmDetails',
          component: AppFilmsDetails,
        },
        {
          path: 'characters',
          name: 'characters',
          component: AppCharacters,
        },
        {
          path: 'characters/:id',
          name: 'characterDetails',
          component: AppCharactersDetails,
        },
      ],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('films');
  else next();
});

export default router;
