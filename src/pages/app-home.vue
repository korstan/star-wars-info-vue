<template>
  <div id="wrapper">
    <HeaderPanel />
    <NavPanel v-if="isMenuVisible" />
    <router-view />
  </div>
</template>

<script>
import HeaderPanel from '@/components/header-panel';
import NavPanel from '@/components/nav-panel';
import { mapGetters } from 'vuex';

export default {
  name: 'AppHome',
  components: {
    HeaderPanel,
    NavPanel,
  },
  computed: {
    ...mapGetters({ isMenuVisible: 'getMenuVisible' }),
  },
};
</script>

<style>
#wrapper {
  padding-top: 50px;
}
</style>
