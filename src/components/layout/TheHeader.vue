<template>
  <header>
    <div>
      <a href="index.html" class="main-header__brand"> {{ title }} </a>
    </div>
    <the-nav-bar></the-nav-bar>
  </header>
</template>

<script>

import TheNavBar from './TheNavBar.vue';

export default {
  components:{ 
    TheNavBar,
  },
  props: ["title"],
};
</script>

<style scoped>
.main-header {
  width: 100%;
  background: whitesmoke;
  padding: 8px 16px;
  justify-content: left;
  align-items: center;
}
.main-header > div {
  display: inline-block;
  vertical-align: middle;
}
</style>