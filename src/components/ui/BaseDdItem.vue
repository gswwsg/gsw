<template>
  <div class="select-box__value">
    <input
      class="select-box__input"
      type="radio"
      :id="id"
      :value="id"
      :name="listname"
      :checked="checked"
    />
      <span class="select-box__input-text">{{ value }}</span>
  </div>
</template>

<script>
export default {
props: ['listname', 'id', 'value', 'checked'],
methods: {
  isChecked (id) {
    if(id === 1){
      console.log('im in ischecked');
      console.log("checked");
      return "checked";
    } else {

      console.log('false')
    }

  }
}
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