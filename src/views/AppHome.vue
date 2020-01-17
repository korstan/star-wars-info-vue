<template>
  <div id="wrapper">
    <HeaderPanel />
    <NavPanel />
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HeaderPanel from '@/components/header/TheHeader';
import NavPanel from '@/components/TheNavbar';

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
