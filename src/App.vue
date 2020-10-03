<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <input @change="selectedFile" type="file" id="file">
    <files :message="state.inputFile"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import files from "./components/asItIsFiles.vue";

export default defineComponent({
  name: "App",
  components: {
    files
  },
  setup() {
    // property
    const state = reactive<{ inputFile: string }>({
      inputFile: ""
    });
    // method
    const selectedFile = (event: any) => {
      event.preventDefault();
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", (filedata: any) => {
        const d: string = filedata.target.result;
        state.inputFile = d;
        console.log(filedata.target.result);
      });
      reader.readAsText(file);
    };
    return {
      // property
      state,
      // method
      selectedFile
    };
  }
});
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
