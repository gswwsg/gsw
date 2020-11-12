<template>
  <div>
    <!--   <img alt="Vue logo" src="./assets/logo.png" /> -->
    <the-header title="gsw"></the-header>
    <!--     <add-schedule></add-schedule>
    <the-container></the-container> -->
    <div>
      <p></p>
      <new-schedule></new-schedule>
      <p></p>
      <the-scrap></the-scrap>
      <stored-actions></stored-actions>
    </div>
  </div>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
/* import TheContainer from "./components/containers/TheContainer.vue";
import AddSchedule from "./components/scheduler/AddSchedule.vue"; */
import TheScrap from "./components/scheduler/TheScrap.vue";
import NewSchedule from "./components/scheduler/NewSchedule.vue";
import StoredActions from "./components/actions/StoredActions.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    /*     TheContainer,
    AddSchedule, */
    TheScrap,
    NewSchedule,
    StoredActions,
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
  line-height: 1.15;
}
body {
  margin: 0;
  background-color: white;
}
</style>