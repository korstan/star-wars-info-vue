<template>
  <div>
    <img
      width="500"
      alt="Star Wars Logo"
      src="https://www.freepnglogos.com/uploads/star-wars-logo-3.png"
    >
    <SignForm />
  </div>
</template>

<script>
import SignForm from '@/app/login/components/sign-form';

export default {
  name: 'AppLogin',
  components: {
    SignForm,
  },
};
</script>

<style module></style>
