<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
    <template v-slot:default>
      <p>Unfortunately at least one input value is invalid</p>
    </template>
    <template v-slot:actions>
        <base-button @click="confirmError">Ok</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">link</label>
        <input id="link" name="link" type="url" ref="urlInput" />
      </div>
      <div>
        <base-button type="submit">Add resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  inject: ['addContainer'],
  methods: {
    submitData() {
      const strTitle = this.$refs.titleInput.value;
      const strDesc = this.$refs.descInput.value;
      const urlLink = this.$refs.urlInput.value;

      if (
        strTitle.trim() === ' ' ||
        strDesc.trim() === '' ||
        urlLink.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.addContainer(strTitle, strDesc, urlLink);
    },
    confirmError() {
        this.inputIsInvalid = false;
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
A input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>