<template>
  <header :class="$style.headerPanel">
    <div 
      :class="[$style.button, $style.menuBtn]" 
      @click="toggleMenu"
    >
      Menu
    </div>
    <div :class="$style.logo">
      Star Wars API
    </div>
    <div 
      :class="$style.signOutBtn"
      @click="signOut"
    >
      Sign Out
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
import { UserSignOut } from '@/app/core/services/authentication';

export default {
  name: 'HeaderPanel',
  methods: {
    ...mapActions({ toggleMenu: 'application/TOGGLE_IS_MENU_VISIBLE' }),
    signOut() {
      UserSignOut()
        .then(() => this.$router.push('/login'))
        .catch();
    },
  },
};
</script>

<style module>
.headerPanel {
  position: fixed;
  top: 0;
  height: 50px;
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
  padding: 0 10px;
  background-color: black;
  cursor: default;
}
.button {
  height: 100%;
  font-size: 15pt;
  cursor: pointer;
}
.signOutBtn {
  font-size: 15pt;
  margin-right: 10px;
}
</style>
