<template>
  <form
    :class="$style.signForm"
    @submit="isExpanded ? signUp() : signIn()"
  >
    <label>Login
      <input
        v-model="credentials.email"
        type="text"
      >
    </label>
    <label>Password
      <input
        v-model="credentials.password"
        type="password"
      >
    </label>
    <input
      v-if="isExpanded"
      v-model="repeatedPassword"
      placeholder="Type password again"
      type="password"
    >

    <button type="submit">
      Submit
    </button>

    <a
      :class="$style.modeSwitcher"
      @click="toggleSignMode()"
    >{{
      isExpanded ? 'Sign In' : 'Sign Up'
    }}</a>
  </form>
</template>

<script>
import { UserSignIn, UserSignUp } from '@/utils/authentication';

export default {
  name: 'SignForm',
  data() {
    return {
      isExpanded: false,
      credentials: {
        email: '',
        password: '',
      },
      repeatedPassword: '',
    };
  },
  methods: {
    /** Toggling form between 'sign up' mode and 'sign in' mode */
    toggleSignMode() {
      this.isExpanded = !this.isExpanded;
    },
    /** Dispatching sign in action from store, routing on films page and catching errors */

    signIn() {
      UserSignIn(this.credentials)
        .then(() => this.$router.push('films'))
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            alert('Wrong password!');
          } else {
            alert(error.message);
          }
        });
    },
    /** Dispatching sign up action from store, routing on films page and catching errors */
    signUp() {
      if (this.repeatedPassword === this.credentials.password) {
        UserSignUp(this.credentials)
          .then(() => this.$router.push('films'))
          .catch(error => alert(error.message));
      } else {
        alert('Passwords does not match!');
      }
    },
  },
};
</script>

<style module>
.signForm {
  color: #fadb03;
  background-color: black;
  max-width: 250px;
  margin: 0 auto;
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 3px solid #fadb03;
  border-radius: 5%;
}

label {
  display: grid;
  text-align: center;
}

input {
  padding: 5px;
  margin: 5px;
  text-align: center;
}

.signForm > button {
  margin: 10px;
}

.modeSwitcher {
  cursor: pointer;
  text-decoration: underline;
}
</style>
