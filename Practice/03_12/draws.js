class Draws {
  constructor(name, color, numOfDraws, draw1, draw2, draw3, draw4) {
    this.name = name;
    this.color = color;
    this.numOfDraws = numOfDraws;
    this.draw1 = draw1;
    this.draw2 = draw2;
    this.draw3 = draw3;
    this.draw4 = draw4;
  }
  toggleDraw(draw, drawStatus) {
    this[draw] = drawStatus;
  }
}

export default Draws;
