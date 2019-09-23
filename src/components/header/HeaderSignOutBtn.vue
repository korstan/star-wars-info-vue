<template>
  <HeaderBtnContainer @headerBtnClick="$emit('signOutBtnClick')">
    <div>
      Sign Out
    </div>
  </HeaderBtnContainer>
</template>

<script>
import HeaderBtnContainer from '@/components/header/HeaderBtnContainer';

export default {
  name: 'HeaderSignOutBtn',
  components: {
    HeaderBtnContainer,
  },
};
</script>

<style>
</style>