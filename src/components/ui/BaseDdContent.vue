<template>
  <base-dd-item :listname=name v-for="item in ddcontent" :key="item.id" :id="item.id" :value="item.value" :checked="item.checked">
  </base-dd-item>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: {
    ddcontent: Array,
    name: String
  },
  computed: {
     check() {
       return  true;
  },
  }
  
};
</script>