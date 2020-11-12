<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ["type", "mode"],
};
</script>
<style scoped>
button {
  font-family: inherit;
      font-weight: 400;
  cursor: pointer;
  background-color: #2185d0;
  color: #fff;
  text-shadow: none;
  background-image: none;
  font-weight: 400;
  border-radius: 0.28571429rem;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  margin: 0 0.25em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  border: none;
  font-size: 1rem;
  
}

button:hover {
  background-color: #1678c2;
}
button:active {
  background-color: #1a69a4;
  color: #fff;
  text-shadow: none;
  border: none;
}
button:focus {
  outline: none;
  border: none;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>