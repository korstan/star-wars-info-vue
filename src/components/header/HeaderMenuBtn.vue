<template>
  <HeaderBtnContainer @headerBtnClick="$emit('menuBtnClick')">
    <div :class="$style.menuBar" />
    <div :class="$style.menuBar" />
    <div :class="$style.menuBar" />
  </HeaderBtnContainer>
</template>

<script>
import HeaderBtnContainer from '@/components/header/HeaderBtnContainer';

export default {
  name: 'HeaderMenuBtn',
  components: {
    HeaderBtnContainer,
  },
};
</script>

<style module>
.menuBar {
  width: 35px;
  height: 5px;
  background-color: #fadb03;
  border-radius: 10%;
  margin: 6px 0;
}
</style>
