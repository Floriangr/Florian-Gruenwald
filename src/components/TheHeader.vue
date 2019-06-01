<template>
  <div class="image">
    <img src="../assets/header.jpg" alt="" />
    <h1>Florian Gruenwald</h1>
    <h2><i>Product & team builder</i></h2>
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

.image h1 {
  font-size: 4vw;
  position: absolute;
  top: 10%;
  left: 10%;
  color: orange;
}

.image h2 {
  font-size: 2vw;
  position: absolute;
  top: 40%;
  left: 10%;
  color: orange;
}
</style>
