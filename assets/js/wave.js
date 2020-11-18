import {Point} from "assets/js/point";

export class Wave {
  constructor(index, totalPoints, color) {
    this.index = index; // wave에도 index를 통해 몇번째 point인가 구별 , // Y좌표값이 다른 Point가 되도록 만들었다.(하나의 선처럼 보이는 것이 아닌 wave처럼 보이게)
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    console.log('canvasWidth:', canvasWidth);
    // 웨이브가 화면 중간에 그려지기 위한 중앙 좌표 가져오기
    this.centerX = canvasWidth / 2;
    this.centerY = canvasHeight / 2;

    this.pointGap = this.canvasWidth / (this.totalPoints - 1); // 포인트 간격은 총 스테이지 넓이에서 포인트 갯수만큼 나눈 값
    this.init();
  }

  // 초기화 함수, resize 이벤트에서 정의한 중앙좌표를 통해 그려질 수 있도록 함.
  init() {
    /*this.point = new Point(
      this.centerX,
      this.centerY
    );*/
    // 간격에 맞춰 포인트 화면에 그리기
    this.points = [];
    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(
        this.index + i,this.pointGap * i, this.centerY
      );
      this.points[i] = point;
      //console.log('i:', i, 'this.centerY:', this.centerY, 'this.index:', this.index, 'this.pointGap:', this.pointGap);
    }
  }

  draw(ctx) {
    ctx.beginPath();
    /*ctx.fillStyle = '#ff0000';
    this.point.update();
    ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
    ctx.fill();*/

    // point 갯수에 맞춰 draw 함수도 재설정
     ctx.fillStyle = this.color; // 현재 wave의 color값
    // 처음과 마지막 포인트는 고정
    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    // 가운데 포인트들만 움직여서 물결 표현
    for (let i = 1; i < this.totalPoints; i++) {
      // index가 0이거나 마지막 index이면 update 함수 실행시키지 않음
      if (i < this.totalPoints - 1) {
        //console.log('this.points[i]:', this.points[i], 'i', i);
        this.points[i].update();
      }

      // 곡선의 웨이브를 표현하기 위해 현재 point의 x, y값이 아니라 이전 포인트에 현재 포인트의 x, y 좌표값을 더한 그 중간값을 표현해준다.
      // 나중에 곡선으로 바꿨을 때 이전값과 현재값을 그대로 사용하게 되면 그냥 직선으로 그려진다.
      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      //ctx.lineTo(cx, cy);
      ctx.arc(cx, cy, 30, 0, 2 * Math.PI)
      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.canvasWidth, this.canvasHeight);
    ctx.lineTo(this.points[0].x, this.canvasHeight);
    ctx.fill();
    ctx.closePath();
  }


}
