import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';
import AppLogin from '@/app/login/pages/app-login';
import AppFilms from '@/app/films/pages/app-films';
import AppHome from '@/pages/app-home';
import AppFilmDetails from '@/app/films/pages/app-film-details';
import AppCharacters from '@/app/characters/pages/app-characters';
import AppCharacterDetails from '@/app/characters/pages/app-character-details';

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
          component: AppFilmDetails,
        },
        {
          path: 'characters',
          name: 'characters',
          component: AppCharacters,
        },
        {
          path: 'characters/:id',
          name: 'characterDetails',
          component: AppCharacterDetails,
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
