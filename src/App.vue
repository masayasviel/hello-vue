<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <input @change="selectedFile" type="file" id="file">
    <div class="container">
      <files :fileContent="state.inputFile" @pickup-content="pickupContent"/>
      <jsonData :content="state.anElement"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import files from "./components/asItIsFiles.vue";
import jsonData from "./components/jsonData.vue";

type State = {
  inputFile: string[];
  anElement: string;
};

export default defineComponent({
  name: "App",
  components: {
    files,
    jsonData
  },
  setup() {
    // property
    const state = reactive<State>({
      inputFile: [],
      anElement: ""
    });
    // method
    const selectedFile = (event: any) => {
      event.preventDefault();
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", (filedata: any) => {
        const d: string = filedata.target.result;
        state.inputFile = d.split("\n");
        state.anElement = "";
      });
      reader.readAsText(file);
    };
    const pickupContent = (index: Event) => {
      const idx = Number(index);
      state.anElement = state.inputFile[idx];
    };
    return {
      // property
      state,
      // method
      selectedFile,
      pickupContent
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
.container {
  margin: 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style>
