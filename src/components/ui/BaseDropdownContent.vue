<template>
  <div v-if="active">
    <select multiple="true" class="select-css">
      <base-dropdown-item
        v-for="bot in regbots"
        :key="bot.id"
        :value="bot.value"
      >
      </base-dropdown-item>
    </select>
  </div>
</template>

<script>
export default {
  name: "BaseDropdownContent",
  data() {
    return {
      regbots: [
        { id: 1, value: "bot1" },
        { id: 2, value: "bot2" },
        { id: 3, value: "bot3" },
      ],
    };
  },
  inject: ["sharedState"],
  computed: {
    active() {
      return this.sharedState.active;
    },
  },
};
</script>

<style scoped>
.select-css {
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  line-height: 1.6;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 0px solid white;
  box-shadow: 0 0px 0 0px white;
  border-radius: 0em;
}
</style>