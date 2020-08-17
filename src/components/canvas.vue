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
    this.img = new Image();
  },
  computed: {
    setImgPath() {
      return this.$store.getters.imgPath;
    },
    writeText() {
      return this.$store.getters.textData;
    }
  },
  watch: {
    setImgPath() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      const reader = new FileReader();
      reader.onload = () => {
        const uploadImgSrc = reader.result;
        this.img.src = uploadImgSrc;
        this.img.onload = () => {
          this.canvas.width = this.img.width;
          this.canvas.height = this.img.height;
          this.ctx.drawImage(this.img, 0, 0);
        }
      }
      reader.readAsDataURL(this.$store.getters.imgPath);
    },
    writeText() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(this.img, 0, 0);
      const data = this.$store.getters.textData;
      for(let key in data) {
        console.log(data[key]);
        // this.ctx.fillStyle = data[key].color;
        // this.ctx.font = data[key].fontSize + " " + data[key].fontFamily;
        // this.ctx.fillText(data[key].text, data[key].x, data[key].y);
      }
    }
  }
}
</script>