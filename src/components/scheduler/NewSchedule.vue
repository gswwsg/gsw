<template>
  <div class="schedule-slider-container">
    <div class="schedule-content-container">
      <h3 class="ui header slider-create-header">Create a new schedule</h3>
      <div class="form-field">
        <label class="form-field label-padding">Type</label>
        <div class="button-group">
          <button>holder</button>
        </div>
      </div>
    </div>
    <div>
      <h4 class="ui header slider-info-header">INFO</h4>
      <div class="form-field">
        <label class="field-label">schedule name</label>
        <div class="ui input field-input">
          <input type="text" value />
        </div>
      </div>

      <div class="form-field">
        <label class="field-label">Select a bot</label>
        <div class="menu">
          <base-dd listname="bots" :ddlist="$store.state.bots"></base-dd>
        </div>
      </div>
      <div class="form-field">
        <label class="field-label">Select a host</label>
        <div class="menu">
          <base-dd listname="hosts" :ddlist="$store.state.hosts"></base-dd>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.schedule-slider-container {
    position: relative;

}
.schedule-content-container {
    position: relative;
}

.form-field,
.button-group {
    position: relative;
    display: block;
    padding: 10px;
}
.field-input {
  display: inline;
  padding-left: 10px;
}
.menu {
    position: relative;
    display: inline;
}

</style>