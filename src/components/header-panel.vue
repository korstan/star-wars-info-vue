<template>
  <header :class="$style.headerPanel">
    <div :class="$style.logo">
      Star Wars API
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPanel',
};
</script>

<style module>
.headerPanel {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: black;
  display: flex;
  color: black;
}
.logo {
  -webkit-text-stroke: 1px #fadb03;
  font-size: 30pt;
  font-weight: bold;
  padding: 0 10px;
  background-color: black;
  cursor: default;
}
</style>
