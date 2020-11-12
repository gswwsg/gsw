<template>
  <div class="container">
    <h1>Create a New Schedule</h1>
    <div class="form-field">
      <label class="form-label">Schedule Name</label>
      <div class="field-input">
        <input class="txt" type="text" value />
      </div>
    </div>
    <div class="form-field">
      <label class="form-label">Select a Bot</label>
      <base-dd listname="bots" :ddlist="$store.state.bots"></base-dd>
    </div>
    <div class="form-field">
      <label class="form-label">Select Hosts</label>
      <base-dd listname="hosts" :ddlist="$store.state.hosts"></base-dd>
    </div>
    <div class="form-field">
      <label class="form-label">Retries</label>
      <base-dd listname="retries" :ddlist="$store.state.retries"></base-dd>
    </div>
    <div class="form-field">
      <label class="form-label">Priority</label>
      <base-dd listname="priority" :ddlist="$store.state.priority"></base-dd>
    </div>  
    <div class="form-field">
      <label class="form-label">Timezone</label>
      <base-dd listname="timezone" :ddlist="$store.state.timezone"></base-dd>
    </div>  
  </div>
</template>

<style scoped>
.container {
  color: initial;
  background-color: #fbfbfc;
  display: block;
  padding: initial;
  border: 0px solid black;
  margin: initial;
  width: initial;
  height: initial;
  align-items: center;
  width: 450px;
}
.form-field {
  color: initial;
  background-color: #fbfbfc;
  display: block;
  padding: initial;
  border: 0px solid black;
  margin: initial;
  width: initial;
  height: initial;
  align-items: center;
}
.form-label {
  display: inline-block;
  width: 150px;
  align-items: initial;
  border: 0px solid red;
  padding: 1.25em;
  text-align: left;
}

.field-input {
  display: inline-block;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
}
.field-input > input {
  border-radius: 0.3rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
  padding: 8px;
  width: 250px;
  max-width: 100%;
  font-family: inherit;
  color: rgba(0, 0, 0, 0.87);
    font-size: 1em;
}
.txt:focus {
  outline: none;
  border: 1.5px solid rgb(24, 144, 255);
  background-color: #fff;
}
</style>