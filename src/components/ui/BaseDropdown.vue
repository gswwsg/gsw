<template>
  <div @click="toggle">
    <slot name="toggler">
      <base-button>click</base-button>
    </slot>
    <slot>
      
    </slot>
  </div>
</template>

<script>
  export default {
    props: ['list'],
    name: 'AppDropdown',
    provide () {
      return {
        sharedState: this.sharedState
      }
    },
    data () {
      return {
        sharedState: {
          active: true
        }
      }
    },
    methods: {
      toggle () {
        this.sharedState.active = true;
      }
    }
  }
</script>