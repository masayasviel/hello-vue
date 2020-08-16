<template>
  <div class="box">
    <div>
      <div class="midashi">追加しよう</div>
      <input @change="selectedFile" type="file" accept="image/jpeg">
      <ul id="sc">
        <styleInput v-once :nodeCount="nodeCount"></styleInput>
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
  data() {
    return {
      nodeCount: 1
    }
  },
  mounted() {
    this.$store.commit("newNode", {nodeCount: this.nodeCount});
    this.nodeCount++;
  },
  methods: {
    selectedFile(e) {
      e.preventDefault();
      this.$store.commit("setImgPath", {imgPath: e.target.files[0]});
    },
    appendNode() {
      const ComponentClass = Vue.extend(styleInput);
      const instance = new ComponentClass({
        propsData: {
          nodeCount: this.nodeCount,
        },
      });
      instance.$mount();
      document.getElementById("sc").appendChild(instance.$el);
      this.$store.commit("newNode", {nodeCount: this.nodeCount});
      this.nodeCount++;
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