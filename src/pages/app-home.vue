<template>
  <div>
    <NavPanel />
    <router-view />
  </div>
</template>

<script>
import NavPanel from '@/components/nav-panel';

export default {
  name: 'AppHome',
  components: {
    NavPanel
  },
};
</script>

<style>
</style>
