<template>
  <div id="interactive_wrap">
    <!--<canvas id="canvas"></canvas>-->
  </div>
</template>

<script>
import {WaveGroup} from "assets/js/waveGroup";

export default {
  name: "Interactive",
  mounted() {
    class Interactive {
      constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = document.getElementById('interactive_wrap').offsetWidth;
        this.canvas.height = document.getElementById('interactive_wrap').offsetHeight;

        this.ctx = this.canvas.getContext('2d');
        document.getElementById('interactive_wrap').appendChild(this.canvas);

        this.waveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));

      }

      resize() {
        this.waveGroup.resize(this.canvas.width, this.canvas.height);
      }

      animate(t) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.waveGroup.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
      }

      /*drawObj() {
        for (let i = 1; i < 50; i++) {
          this.ctx.strokeRect(generateRandomNum(10, this.canvas.width - 100), generateRandomNum(10, this.canvas.height - 100), 100, 100);
        }
      }*/
    }

    /*function generateRandomNum(min, max) {
      let num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num;
    }*/

    let canvas = new Interactive();
    /*canvas.drawObj();*/
  }
}
</script>

<style lang="scss" scoped>
#interactive_wrap {
  height: 85vh;
  background-color: #ffffff;
}
</style>
