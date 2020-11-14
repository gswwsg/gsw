<template>
  <div id="app">
    <div class="container" v-cloak @drop.prevent="addFile" @dragover.prevent>
      <h4>Drag and Drop here</h4>
      <li v-for="(file, id) in files" :key="id" class="list-group-item mb-3 border-top">
        {{ file.name }} ({{ file.size }} kb)
        <button @click="removeFile(file)">Remove</button>
        </li>
    </div>
  </div>

  And then add this styles in the head tag:
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Item A",
          list: 1,
        },
        {
          id: 1,
          title: "Item B",
          list: 1,
        },
        {
          id: 2,
          title: "Item C",
          list: 2,
        },
      ],
      files: [],
    };
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1);
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2);
    },
  },
  methods: {
    startDrag: (evt, item) => {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = list;
    },
    addFile(e) {
      let files = e.dataTransfer.files;
      [...files].forEach(file => {
        this.files.push(file);
        console.log(this.files)
      });
    },
     removeFile(file) {
      this.files = this.files.filter(f => {
        return f != file;
      });
    },
  },
};
</script>
     <style scoped>
.container {
  width: 350px;
  height: 350px;
  border: 2px dotted gray;
}
.container h4 {
  text-align: center;
  font-family: sans-serif;
}
</style> 