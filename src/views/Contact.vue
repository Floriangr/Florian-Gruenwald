<template>
  <div>
    <TheHeader />
    <TheNavBar />
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSevlAJ0qNIfuDSpf23CT81H0SFXXtKbLxEfL0HrR-_SDHbNHw/viewform?embedded=true"
      width="640"
      height="1019"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading...
    </iframe>
    <TheFooter />
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
</style>
