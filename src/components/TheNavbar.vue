<template>
  <div :class="$style.navBar" :style="isMenuVisible ? expandedWidth : collapsedWidth">
    <a
      :class="$style.navElement"
      @click="routeToFilms()"
    >
      Films
    </a>
    <a
      :class="$style.navElement"
      @click="routeToCharacters()"
    >
      Characters
    </a>
    <a
      :class="$style.navElement"
      @click="routeToPlanets()"
    >
      Planets
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NavPanel',
  data() {
    return {
      expandedWidth: {
        'width': '280px'
      },
      collapsedWidth: {
        'width': '0px'
      }
    }
  },
  computed: {
    ...mapState({ isMenuVisible: state => state.application.isMenuVisible }),
  },
  methods: {
    routeToFilms() {
      this.$router.push('/films');
    },
    routeToCharacters() {
      this.$router.push('/characters');
    },
    routeToPlanets() {
      this.$router.push('/planets');
    },
  },
};
</script>

<style module>
.navBar {
  position: fixed;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 30pt;
  font-weight: bold;
  color: #1a1a1a;
  background-color: #1a1a1a;
  overflow-x: hidden;
  transition: 0.5s;
}
.navElement {
  display: block;
  margin: 3px;
  background-color: #1a1a1a;
  color: #fadb03;
  cursor: pointer;
}

.navElement:hover {
  background-color: #3f3f3f;
}
</style>
