<template>
  <div :class="$style.navBar">
    <div :class="$style.logo">
      Star Wars API
    </div>
    <div
      :class="$style.navElement"
      @click="routeToFilms()"
    >
      Films
    </div>
    <div
      :class="$style.navElement"
      @click="routeToCharacters()"
    >
      Characters
    </div>
    <button 
      :class="[$style.signOutBtn]"
      @click="signOut()"
    >
      Sign Out
    </button>
  </div>
</template>

<script>
import { UserSignOut } from '@/app/core/services/authentication';

export default {
  name: 'NavPanel',
  methods: {
    routeToFilms() {
      this.$router.push('/films');
    },
    routeToCharacters() {
      this.$router.push('/characters');
    },
    signOut() {
      UserSignOut()
        .then(() => this.$router.push('/login'))
        .catch();
    },
  },
};
</script>

<style module>
.navBar {
  height: 50px;
  display: flex;
  font-size: 30pt;
  font-weight: bold;
  color: black;
  background-color: #fadb03;
}
.logo {
  -webkit-text-stroke: 2px #fadb03;
  padding: 0 10px;
  background-color: black;
  cursor: default;
}
.signOutBtn {
  background-color: black;
  color: #fadb03;
  margin: 2px 1px;
  font-size: 12pt;
  font-weight: bold;
  flex: 1 -10%;
}
.navElement {
  flex: 1;
  margin: 3px;
  background-color: black;
  color: #fadb03;
  text-align: center;
  cursor: pointer;
}

.navElement:hover {
  background-color: #3f3f3f;
}
</style>
