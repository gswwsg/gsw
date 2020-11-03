<template>
  <section>
    <base-card>
      <h2>INFO</h2>
      <form @submit.prevent="submitSchedule">
        <div class="form-control">
          <label for="scheduleName">Schedule Name</label>
          <input
            type="text"
            id="scheduleName"
            name="scheduleName"
            v-model.trim="scheduleName"
          />
        </div>
       <base-dropdown id="bots" list="bots">
          <label for="selectedBot">Select a bot</label>
          <base-dropdown-content>
          </base-dropdown-content>
       </base-dropdown> 
        <div class="form-control">
          <label for="selectedHost">Select a Host</label>
          <select name="hosts" id="hosts">
            <option value="host1">host1</option>
            <option value="host2">host2</option>
            <option value="host3">host3</option>
          </select>
        </div>
        <div class="form-control">
          <label for="selectedRetries">Retries</label>
          <select name="retries" id="retries">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="form-control">
          <label for="selectedPrio">Priority</label>
          <select name="prio" id="prio">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="form-control">
          <label for="tmz">Timezone</label>
          <select name="tmz">
            <option value="UTC">UTC</option>
            <option value="CET">CET</option>
            <option value="3">3</option>
          </select>
        </div>
        <div id="trigger-conditions">
          <p>TRIGGER CONDITIONS</p>
          <div class="form-control">
            <label for="selectedMinutes">Select Multiple Minutes</label>
            <select name="minutes">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div class="form-control">
            <label for="selectedHours">Select Multiple Hours</label>
            <select name="hours">
              <option value="00:00">00:00</option>
              <option value="01:00">01:00</option>
              <option value="02:00">02:00</option>
            </select>
          </div>
          <div class="form-control">
            <label for="selectedMonths">Month</label>
            <select name="month">
              <option value="JAN">JAN</option>
              <option value="FEB">FEB</option>
              <option value="MAR">MAR</option>
            </select>
          </div>
          <div class="form-control">
            <label for="selectedDays">Week</label>
            <select name="week">
              <option value="MON">MON</option>
              <option value="TUE">TUE</option>
              <option value="WED">WED</option>
              <option value="THU">THU</option>
              <option value="FRI">FRI</option>
              <option value="SAT">SAT</option>
              <option value="SUN">SUN</option>
            </select>
          </div>
          <base-button>Generate CRON expression</base-button>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <p v-if="error">{{ error }}</p>
        <div id="cron-expression">
          <h3>CRON EXPRESSION</h3>
          <input type="text" />
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>
<script>
export default {
  data() {
    return {
      scheduleName: "",
      selectedBot: "",
      selectedHost: "",
      retries: 1,
      priority: 1,
      timeZone: "",
      enabled: true,
      selectedMinutes: "",
      selectedHours: "",
      selectedMonths: "",
      selectedDays: "",
      error: null,
      invalidInput: false,
      regbots: ['bot1', 'bot2', 'bot3']
    };
  },
  emits: ["schedule-submit"],
  methods: {
    submitSchedule() {
      if (this.scheduleName === "") {
        this.invalidInput = true;
        return;
      }

      this.invalidInput = false;

      this.$emit("schedule-submit", {
        scheduleName: this.scheduleName,
        selectedBot: this.selectedBot,
        selectedHost: this.selectedHost,
        retries: this.retries,
        priority: this.priority,
        timeZone: this.timeZone,
        enabled: this.enabled,
        selectedMinutes: this.selectedMinutes,
        selectedHours: this.selectedHours,
        selectedMonths: this.selectedMonths,
        selectedDays: this.selectedDays,
      });
      this.error = null;
      fetch("https://gswsspace.firebaseio.com/scheduler.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            scheduleName: this.scheduleName,
            selectedBot: this.selectedBot,
            selectedHost: this.selectedHost,
            retries: this.retries,
            priority: this.priority,
            timeZone: this.timeZone,
            enabled: this.enabled,
            selectedMinutes: this.selectedMinutes,
            selectedHours: this.selectedHours,
            selectedMonths: this.selectedMonths,
            selectedDays: this.selectedDays,
        }),
      })
        .then((response) => {
          if (response.ok) {
            return;
          } else {
            throw new Error("could not save data");
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = "something went wrong...";
        });
      this.scheduleName = "";
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type="text"] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>