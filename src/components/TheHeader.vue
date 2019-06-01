<template>
  <div class="image">
    <img src="../assets/header.jpg" alt="">
    <h1>Welcome to my world!</h1>
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
  width:100%;
  display: block;
  max-height: 20vw;
}

.image h1 {
  font-size: 6vw;
  position: absolute;
  top: 10%;
  color: orange;
}
</style>
