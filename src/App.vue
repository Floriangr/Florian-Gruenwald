<template>
  <div id="app" class="page-container">
    <div class="content-wrap">
      <TheHeader />
      <TheNavBar />
      <router-view />
    </div>
    <TheFooter class="footer" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheNavBar from "@/components/TheNavBar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheNavBar,
    TheFooter
  }
};
</script>

<style>
.page-container {
  position: relative;
  min-height: 50vw;
}

.content-wrap {
  padding-bottom: 5rem;    /* Footer height */
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;            /* Footer height */
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
