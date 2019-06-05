<template>
  <div style="background-color: grey">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSevlAJ0qNIfuDSpf23CT81H0SFXXtKbLxEfL0HrR-_SDHbNHw/viewform?embedded=true"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      class="iframe"
    >
      Loading...
    </iframe>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheNavBar from "@/components/TheNavBar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "home",
  components: {
    TheHeader,
    TheNavBar,
    TheFooter
  }
};
</script>

<style lang="css" scoped>
  .iframe {
    margin-top: 10px;
    width: 50vw;
    height: 30vw
  }
</style>
