<template>
  <div 
    :class="$style.btnContainer"
    @click="$emit('headerBtnClick')"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HeaderBtnContainer',
}
</script>

<style module>
  .btnContainer{
    display: inline-block;
    height: 100%;
    cursor: pointer;
    margin: 0 10px;
    font-size: 26pt;
  }
</style>