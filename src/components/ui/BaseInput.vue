<template>
  <div class="ui">
    <input class="txt" type="text" value />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {},
  methods: {},
  computed: {},
};
</script>

<style scoped>
.ui {
    display: inline-block;
    padding: 5px;
      color: #fff;
}
.ui > input {
  font-family: inherit;
  color: rgba(0, 0, 0, 0.87);
  background: #fff;
  font-size: 1em;
  border: 1px solid rgba(34, 36, 38, 0.15);
  text-align: left;
  padding-top: 0.678571em;
  padding-right: 1em;
  padding-bottom: 0.678571em;
  padding-left: 1em;
  box-shadow: none;
  border-radius: 0.28571429rem;
  max-width: 100%;
  width: 250px;
}

.txt:hover {
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.25);
}
.txt:focus {
  outline: none;
  border: 1.5px solid rgb(24, 144, 255);
  background-color: #fff;
}
</style>