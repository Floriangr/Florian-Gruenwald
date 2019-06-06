<template>
  <div class="navbar">
    <router-link to="/" data-cy="home">Home</router-link>
    <router-link to="/cv" data-cy="cv">C.V.</router-link>
    <router-link to="/login" data-cy="login" class="right" v-if="!isAuthenticated">Login</router-link>
    <button @click="logout" data-cy="logout" class="button" v-if="isAuthenticated">Logout</button>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.state.token ? true : false;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
};
</script>

<style lang="css" scoped>
.navbar {
overflow: hidden;
background-color: #333;
}

.navbar a {
float: left;
display: block;
color: white;
text-align: center;
padding: 14px 20px;
text-decoration: none;
}

.button {
  background: transparent;
  border: none;
  font: inherit;
  float: right;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}

.navbar a.right {
float: right;
}

@media screen and (max-width: 400px) {
  .navbar a {
    float: none;
    width: 100%;
  }
}
</style>
