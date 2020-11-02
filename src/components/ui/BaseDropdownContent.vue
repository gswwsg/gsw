<template>
  <div v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'BaseDropdownContent',

    inject: ['sharedState'],
    computed: {
      active () {
        return this.sharedState.active;
      }
    }
  }
</script>