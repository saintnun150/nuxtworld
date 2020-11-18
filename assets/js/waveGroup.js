import {Wave} from "assets/js/wave";

export class WaveGroup {
  constructor() {
    this.totalWaves = 1;
    this.totalPoints = 6; // 몇개의 포인트로 웨이브를 구성할 것인가

    this.color = ['rgba(0,199,235,0.4)', 'rgba(0,146,199,0.4)', 'rgba(0,87,158,0.4)'];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(
        i,
        this.totalPoints,
        this.color[i],
      );
      this.waves[i] = wave;
    }
  }

  // waveGroup 안에 있는 전체 wave 만큼 함수를 실행시켜줌
  resize(canvasWidth, canvasHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(canvasWidth, canvasHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
