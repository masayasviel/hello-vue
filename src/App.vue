<template>
  <div>
    <setStyle></setStyle>
    <cvs></cvs>
  </div>
</template>

<script>
import setStyle from "./components/setStyle.vue"
import cvs from "./components/canvas.vue"

export default {
  components: {
    setStyle,
    cvs
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}
</style>
