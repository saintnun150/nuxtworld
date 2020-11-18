export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y; // y좌표 값 이동
    this.speed = 0.02;
    this.cur = index; // 현재값을 speed만큼 증가시킴, index를 통해 현재 point가 몇번째인지를 구별해줌
    this.max = 0.5 * 100 + 150;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    //console.log('this.y:', this.y);
  }

}
