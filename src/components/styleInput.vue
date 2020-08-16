<template>
  <li class="node">
    sample{{ nodeNumber }}
    <ul>
      <li><input v-model.number="setNumber" type="number"></li>
      <li><input type="number"></li>
      <li><input type="number"></li>
      <li>{{ inputNum }}</li>
      <li><button @click="deleteSelf">remove</button></li>
    </ul>
  </li>
</template>

<script>
import store from "../store.js"

export default {
  data() {
    return {
      inputNum: 114514,
      nodeNumber: this.nodeCount
    }
  },
  props: ["nodeCount"],
  computed: {
    setNumber: {
      get() {
        return this.inputNum;
      },
      set(value) {
        this.inputNum = value;
      }
    }
  },
  methods: {
    deleteSelf() {
      store.commit("deleteNode", {title: "node"+this.nodeNumber});
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>

<style scoped>
.node {
  position: relative;
  margin-bottom: 10px;
  text-decoration: none;
  display: block;
}

.node ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.node ul li {
  /* display: none; */
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: all 0.2s;
}

.node:hover ul li{
  /* display: block; */
  overflow: visible;
  height: auto;
}

.node:hover {
  background-color: aqua;
}

.node:hover ul li:first-child{
  border-top: 0;
}

.node:hover ul li:last-child{
  border-bottom: 0;
}
</style>