class WashBasket {
  constructor(
    name,
    volume,
    color,
    washingItem1,
    washingItem2,
    washingItem3,
    lidOn
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.washingItem1 = washingItem1;
    this.washingItem2 = washingItem2;
    this.washingItem3 = washingItem3;
    this.lidOn = lidOn;
  }
  toggleLid(lidStatus) {
    this.lidOn = lidStatus;
  }
}

export default WashBasket;
