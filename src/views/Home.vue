<template>
  <div class="home">
    <div class="row pageContent">
      <div class="side">
        <img
          src="../assets/Florian_small.jpg"
          style="width:100%; display:block;"
          alt=""
        />
      </div>
      <div class="main">
        <div class="container">
          <h2>
            I'm passionate about creating impactful digital products users love
            <br />
            I currently work for E.ON, as a Product Owner for the eon.com
            website <br />
            In my free-time I enjoy programming, windsurfing and playing improv
            theater <br />
            <br />
          </h2>
        </div>
        <Tweet id="1117064644454227970" class="tweet"
          ><div class="spinner"></div
        ></Tweet>
      </div>
    </div>
  </div>
</template>

<script>
import { Tweet } from "vue-tweet-embed";

export default {
  name: "home",
  components: {
    Tweet
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.side {
  overflow: hidden;
}

.side img {
  transition: 0.5s ease-out;
}

.side:hover img {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.container {
  min-height: 170px;
}

.main h2 {
  font-size: 1vw;
  line-height: 2;
  font-style: italic;
  color: black;
  font-family: "Courier New", Times, serif;
  transition: 0.5s ease-out;
  backface-visibility: hidden;
}

.main h2:hover {
  transform: scale(1.05);
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
  max-width: 100%;
  background-color: Grey;
  padding: 20px;
  text-align: center;
}

.tweet {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

@media screen and (max-width: 700px) {
  .row {
    flex-direction: column;
  }
  .main h2 {
    font-size: 4vw;
  }
  .tweet {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
</style>
