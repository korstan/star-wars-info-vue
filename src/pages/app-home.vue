<template>
  <div id="wrapper">
    <HeaderPanel />
    <NavPanel v-if="isMenuVisible" />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderPanel from '@/components/header-panel';
import NavPanel from '@/components/nav-panel';

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
