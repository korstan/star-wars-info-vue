<template>
  <header :class="$style.headerPanel">
    <HeaderMenuBtn 
      @menuBtnClick="toggleMenu"
    />
    <div :class="$style.logo">
      Star Wars API
    </div>
    <HeaderSignOutBtn 
      @signOutBtnClick="signOut"
    />
  </header>
</template>

<script>
import { mapActions } from 'vuex';
import Authentication from '@/utils/auth/Authentication';
import HeaderMenuBtn from '@/components/header/HeaderMenuBtn';
import HeaderSignOutBtn from '@/components/header/HeaderSignOutBtn';

export default {
  name: 'HeaderPanel',
  components: {
    HeaderMenuBtn,
    HeaderSignOutBtn,
  },
  methods: {
    ...mapActions({ toggleMenu: 'application/TOGGLE_IS_MENU_VISIBLE' }),
    signOut() {
      Authentication.UserSignOut()
        .then(() => this.$router.push('/login'))
        .catch();
    },
  },
};
</script>

<style module>
.headerPanel {
  padding: 5px 0;
  position: fixed;
  top: 0;
  height: 40px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  -webkit-text-stroke: 1px #fadb03;
}
.logo {
  font-size: 30pt;
  font-weight: bold;
  background-color: black;
  cursor: default;
}
</style>
