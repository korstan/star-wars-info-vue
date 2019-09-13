<template>
  <div id="wrapper">
    <HeaderPanel />
    <NavPanel />
    <router-view />
  </div>
</template>

<script>
import HeaderPanel from '@/components/header-panel';
import NavPanel from '@/components/nav-panel';

export default {
  name: 'AppHome',
  components: {
    HeaderPanel,
    NavPanel,
  },
};
</script>

<style>
#wrapper{
  padding-top: 50px;
}
</style>
