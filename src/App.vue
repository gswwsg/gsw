<template>
  <div>
    <!--   <img alt="Vue logo" src="./assets/logo.png" /> -->
    <the-header title="gsw"></the-header>
    <add-schedule></add-schedule>
    <the-container></the-container>

  </div>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheContainer from "./components/containers/TheContainer.vue";
import AddSchedule from "./components/scheduler/AddSchedule.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheContainer,
    AddSchedule,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");
* {
  box-sizing: border-box;
}
html {
  font-family: "Roboto Condensed", sans-serif;
}
body {
  margin: 0;
  background-color: white;
}
</style>