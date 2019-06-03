<template>
  <div class="home">
    <TheHeader />
    <TheNavBar />
    <div class="row pageContent">
      <div class="side">
        <img src="../assets/Florian_small.jpg" style="width:100%; display:block;" alt="">
      </div>
      <div class="main">
        <h2>
          I'm passionate about creating impactful digital products users love <br>
          I currently work for E.ON, as a Product Owner for the eon.com website <br>
          In my free-time I enjoy programming, windsurfing and playing improv theater <br> <br>
        </h2>
        <Tweet id="1117064644454227970" style="display: inline-block"><div class="spinner"></div></Tweet>
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
import { Tweet } from 'vue-tweet-embed';

export default {
  name: "home",
  components: {
    TheHeader,
    TheNavBar,
    TheFooter,
    Tweet
  }
};
</script>

<style>

* {
  box-sizing: border-box;
}

.main h2 {
  font-size: 1vw;
  line-height: 2;
  font-style: italic;
  color: black;
  font-family: "Courier New", Times, serif;
  transition: 1s;
}

.main h2:hover {
  font-size: 1.1vw;
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
  text-align: center
}

@media screen and (max-width: 700px) {
  .row {
    flex-direction: column;
  }
}
</style>
