<template>
  <div class="image">
    <img src="../assets/header.jpg" alt="" />
    <div class="content">
      <h1>Florian Gruenwald</h1>
      <h2><i>Product & team builder</i></h2>
      <router-link to="/contact" tag="button" class="button" data-cy="contact">
        Contact me
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image {
  position: relative;
}

.image img {
  width: 100%;
  display: block;
  max-height: 20vw;
}

.content {
  position: absolute;
  top: 10%;
  left: 10%;
  color: orange;
  text-align: left;
  line-height: 0.5vw;
}

.content button {
  background-color: transparent;
  border-style: solid;
  border-color: orange;
  font-size: 1vw;
  color: orange;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.content button {
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  backface-visibility: hidden;
}

.content button:hover {
  transform: scale(1.05);
}

.content h1 {
  font-size: 4vw;
}

.content h2 {
  font-size: 2vw;
}
</style>
