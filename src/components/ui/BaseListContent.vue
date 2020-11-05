<template>
  <base-list-item v-for="bot in arr_bots" :key="bot.id" :id="bot.id" :value="bot.value">
  </base-list-item>
</template>

<script>
export default {
  data() {
    return {
      arr_bots: [
        { id: 1, value: "bot1" },
        { id: 2, value: "bot2" },
        { id: 3, value: "bot3" },
      ],
    };
  },
}
</script> 