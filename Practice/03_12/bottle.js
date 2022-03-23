class Bottle {
  constructor(name, volume, waterlevel, color, lidopen) {
    this.name = name;
    this.volume = volume;
    this.waterlevel = waterlevel;
    this.color = color;
    this.lidopen = lidopen;
  }
  smallDrink() {
    if (this.lidOpen == true) {
      if (this.waterLevel > 0.2) {
        this.waterLevel -= 0.2;
        console.log("water level is now:", this.waterLevel);
      } else if (this.waterLevel <= 0.2) {
        this.waterLevel = 0;
        console.log("water level is now:", this.waterLevel);
      } else if (this.waterLevel == 0) {
        console.log("Your bottle is empty");
      }
    } else {
      console.log("You need to open the lid to drink");
    }
  }
  largeDrink() {
    if (this.lidOpen == true) {
      if (this.waterLevel > 0.5) {
        this.waterLevel -= 0.5;
        console.log("water level is now:", this.waterLevel);
      } else if (this.waterLevel <= 0.5) {
        this.waterLevel = 0;
        console.log("water level is now:", this.waterLevel);
      } else if (this.waterLevel == 0) {
        console.log("Your bottle is empty");
      }
    } else {
      console.log("You need to open the lid to drink");
    }
  }
  fillBottle() {
    if (this.waterLevel == 1) {
      console.log("water bottle is already full");
    } else {
      this.waterLevel = 1;
      console.log("water level is now full");
    }
  }
}

export default Bottle;
