const washBasket = {
  name: "Wicca Basket",
  volume: 60,
  color: "Brown",
  washing: {
    top: {
      name: "Band top",
      color: "Black",
      size: "Large",
    },
    shorts: {
      name: "Gym shorts",
      color: "Grey",
      size: "Large",
    },
  },
  lidOn: true,
  toggleLid: function (lidStatus) {
    this.lidOn = lidStatus;
  },
};

const bottle = {
  name: "Gym bottle",
  volume: 1,
  waterLevel: 1,
  color: "Blue",
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  smallDrink: function () {
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
  },
  largeDrink: function () {
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
  },
  fillBottle: function () {
    if (this.waterLevel == 1) {
      console.log("water bottle is already full");
    } else {
      this.waterLevel = 1;
      console.log("water level is now full");
    }
  },
};

const draws = {
  name: "Main draws",
  color: "Brown",
  numOfDraws: 4,
  drawsOpen: {
    draw1: false,
    draw2: false,
    draw3: false,
    draw4: false,
  },
  toggleDraw: function (draw, drawStatus) {
    this.drawsOpen[draw] = drawStatus;
  },
};

console.log("The wash basket:", washBasket);
console.log("The bottle:", bottle);
console.log("The draws:", draws);
