<template>
  <li>
    <label class="select-box__option" :for="id" aria-hidden="aria-hidden">{{
      value
    }}</label>
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["id", "value"],
  computed: {},
};
</script>

<style scoped>
.select-box__option {
  display: block;
  padding: 15px;
  background-color: #fff;
}
.select-box__option:hover,
.select-box__option:focus {
  color: #546c84;
  background-color: #fbfbfb;
}
</style>