<template>
  <div class="node">
    <input v-model.number="setNumber" type="number">
    <div>{{ inputNum }}</div>
    <button @click="deleteSelf">remove</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNum: 114514
    }
  },
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
    deleteSelf: function () {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>

<style scoped>
.node {
  margin-bottom: 10px;
}
</style>