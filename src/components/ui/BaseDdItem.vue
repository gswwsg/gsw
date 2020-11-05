<template>
  <div class="select-box__value">
    <input
      class="select-box__input"
      type="radio"
      :id="id"
      :value="id"
      name="Ben"
      checked="checked"
    />
      <p class="select-box__input-text">{{ value }}</p>
  </div>
</template>

<script>
export default {
props: ['id', 'value'],
}
</script>
<style scoped>
.select-box__value {
  display: flex;
}

.select-box__input {
  display: none;
}
.select-box__input:checked + .select-box__input-text {
  display: block;
}
.select-box__input-text {
  display: none;
  width: 100%;
  margin: 0;
  padding: 15px;
  background-color: #fff;
}
</style>