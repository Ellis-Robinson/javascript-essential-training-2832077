/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import WashBasket from "./washbasket.js";
import Top from "./top.js";
import Shorts from "./shorts.js";
import Bottle from "./bottle.js";

const gymTop = new Top("Gym top", "Grey", "Short", "L", true);
const warmTop = new Top("Warm top", "Green", "long", "L", true);
const gymShorts = new Shorts("Gym shorts", "Grey", "L", true);
const comfyShorts = new Shorts("Comfortable shorts", "black", "L", true);

const wiccaWashBasket = new WashBasket(
  "Main wash basket",
  70,
  "brown",
  gymTop,
  warmTop,
  gymShorts,
  false
);

const gymBottle = new Bottle("Gym bottle", 1, 1, "blue", false);

console.log(wiccaWashBasket);

console.log(gymBottle);

console.log(comfyShorts);
