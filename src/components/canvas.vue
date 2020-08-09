<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null
    }
  },
  mounted(){
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
  },
  computed: {
    setImgPath() {
      return this.$store.getters.imgPath;
    }
  },
  watch: {
    setImgPath() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      const reader = new FileReader();
      reader.onload = () => {
        const uploadImgSrc = reader.result;
        const img = new Image();
        img.src = uploadImgSrc;
        img.onload = () => {
          this.ctx.drawImage(img, 0, 0);
        }
      }
      reader.readAsDataURL(this.$store.getters.imgPath);
    }
  }
}
</script>