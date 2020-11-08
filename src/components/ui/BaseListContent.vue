<template>
  <base-list-item :listname=name v-for="item in ddcontent" :key="item.id" :id="item.id" :value="item.value">
  </base-list-item>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props:{
    ddcontent: Array,
    name: String
  } 
}
</script> 