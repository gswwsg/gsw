<template>
  <div >
    <slot name="toggler">
      <base-button @click="toggle">click</base-button>
    </slot>
    <slot >
      <base-button @click="toggle">click</base-button>
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
      };
    },
    data () {
      return {
        sharedState: {
          active: false
        }
      };
    },
    methods: {
      toggle () {
        this.sharedState.active = !this.sharedState.active;
      }
    }
  }
</script>