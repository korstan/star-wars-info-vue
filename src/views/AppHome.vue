<template>
  <div id="wrapper">
    <HeaderPanel />
    <NavPanel v-if="isMenuVisible" />
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HeaderPanel from '@/components/header-panel';
import NavPanel from '@/components/nav-panel';

export default {
  name: 'AppHome',
  components: {
    HeaderPanel,
    NavPanel,
  },
  computed: {
    ...mapState({ isMenuVisible: state => state.application.isMenuVisible }),
  },
};
</script>

<style>
#wrapper {
  padding-top: 50px;
}
</style>
