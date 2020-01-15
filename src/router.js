import Vue from 'vue';
import Router from 'vue-router';
import AppLogin from '@/views/AppLogin';
import AppHome from '@/views/AppHome';
import AppFilms from '@/views/AppFilms';
import AppFilmsDetails from '@/views/AppFilmsDetails';
import AppCharacters from '@/views/AppCharacters';
import AppCharactersDetails from '@/views/AppCharactersDetails';
import AppPlanets from '@/views/AppPlanets';
import AppPlanetsDetails from '@/views/AppPlanetsDetails';
import TokensHelper from '@/utils/TokensHelper';

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
        {
          path: 'planets',
          name: 'planets',
          component: AppPlanets,
        },
        {
          path: 'planets/:id',
          name: 'planeetDetails',
          component: AppPlanetsDetails,
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
  const isAuthenticated = !!TokensHelper.GetIdToken();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) next('login');
  else if (!requiresAuth && isAuthenticated) next('films');
  else next();
});

export default router;
