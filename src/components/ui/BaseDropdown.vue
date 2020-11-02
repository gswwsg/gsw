<template>
  <div @click="toggle">
    <slot name="toggler">
      <base-button>{{list}}</base-button>
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
          active: false
        }
      }
    },
    methods: {
      toggle () {
        this.sharedState.active = !this.sharedState.active
      }
    }
  }
</script>