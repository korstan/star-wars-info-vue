<template>
  <div>
    <img
      width="500"
      alt="Star Wars Logo"
      src="https://www.freepnglogos.com/uploads/star-wars-logo-3.png"
    >
    <TheLoginForm />
  </div>
</template>

<script>
import TheLoginForm from '@/components/TheLoginForm';

export default {
  name: 'AppLogin',
  components: {
    TheLoginForm,
  },
};
</script>

<style module></style>
