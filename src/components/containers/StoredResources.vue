<template>
  <ul>
    <sub-domain
      v-for="sub in resources"
      :key="sub.id"
      :id="sub.id"
      :title="sub.title"
      :description="sub.description"
      :link="sub.link"
    ></sub-domain>
  </ul>
</template>
<script>
import SubDomain from './SubDomain.vue';
export default {
   inject: ['resources'],
   components: {
       SubDomain
       }
};
</script>
<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem
}
</style>