<template>
  <div class="footer">
    <a
      href="https://www.linkedin.com/in/florian-gruenwald-4057637a/"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" />
      Linkedin
    </a>
    <a
      href="https://github.com/Floriangr"
    >
      <font-awesome-icon :icon="['fab', 'github']" />
      Github
    </a>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .footer {
  height: 75px;
  padding: 20px;
  background: darkGrey;
  text-align: center;
  }
  .footer a {
  display: inline-block;
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  }
</style>
