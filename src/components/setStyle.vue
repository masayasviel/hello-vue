<template>
  <div class="box">
    <div>
      <div class="midashi">追加しよう</div>
      <input @change="selectedFile" type="file" accept="image/jpeg">
      <ul id="sc">
        <styleInput></styleInput>
      </ul>
      <button @click="appendNode">add</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue/dist/vue.esm.js"
import styleInput from "./styleInput.vue"

export default {
  components: {
    styleInput
  },
  methods: {
    selectedFile: function(e) {
      e.preventDefault();
      this.$store.commit("setImgPath", {imgPath:e.target.files[0]});
    },
    appendNode() {
      const ComponentClass = Vue.extend(styleInput);
      const instance = new ComponentClass();
      instance.$mount();
      document.querySelector("#sc").append(instance.$el);
    }
  }
}
</script>

<style scoped>
button {
  position: absolute;
	bottom: 30px;
}

.box {
  margin: 10px;
  width: 300px;
  height: 850px;
  border: medium double gray;
  display: flex;
}

.midashi {
  margin-bottom: 10px;
}

#sc {
  list-style-type: none;
  height: 700px;
  overflow: auto;
}
</style>