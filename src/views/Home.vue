<template>
  <div class="home">
    <TheHeader />
    <TheNavBar />
    <div class="row pageContent">
      <div class="side">
        <img src="../assets/Florian_small.jpg" style="width:100%; display:block;" alt="">
      </div>
      <div class="main">
        Passionate about creating impactful digital products users love. 
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
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

<style>


* {
  box-sizing: border-box;
}

.pageContent {
  min-height: calc(100vh - 398px);
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.side {
  flex: 30%;
  background-color: lightGrey;
}

.main {
  flex: 70%;
  background-color: Grey;
  padding: 20px;
}

@media screen and (max-width: 700px) {
  .row {
    flex-direction: column;
  }
}
</style>
