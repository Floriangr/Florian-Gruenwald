<template>
  <div class="navbar">
    <router-link to="/" data-cy="home">Home</router-link>
    <router-link to="/cv" data-cy="cv">C.V.</router-link>
    <router-link to="/contact" data-cy="contact">Contact me</router-link>
    <a href="#" class="right">Login</a>
  </div>
</template>

<script>
export default {};
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
