<template>
  <li>
    <label class="select-box__option" :for="id" aria-hidden="aria-hidden" :name="listname">{{
      value
    }}</label>
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["id", "value", "listname"],
  computed: {},
};
</script>

<style scoped>
.select-box__option {
  display: inline-block;
  padding: 15px;
  background-color: #fff;
  border-radius: 0.3rem;
}
.select-box__option:hover,
.select-box__option:focus {
  color: #546c84;
  background-color: rgba(0,0,0,0.1);
  width: 100%;
}
.select-box__current:focus + .select-box__list .select-box__option {
  width: 100%;
  cursor: pointer;
}
</style>