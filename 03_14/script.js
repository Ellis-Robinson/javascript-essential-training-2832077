/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST"
);

const book1 = new Book(
    "Our Little Cruelties",
    "Thriller",
    "Liz Nugent",
    376,
    0,
    7.99,
    false
);
const book2 = new Book(
    "The tatooist of Auschwitz",
    "Non-fiction",
    "Heather Morris",
    270,
    0,
    8.99,
    false
);
const book3 = new Book(
    "Her Naked Skin",
    "Play",
    "Rebecca Lenkiewicz",
    92,
    0,
    8.99,
    false
);
const book4 = new Book(
    "This is going to hurt",
    "Comedy",
    "Adam Kay",
    280,
    0,
    8.99,
    false
);
const book5 = new Book(
    "Invisible Girl",
    "Thriller",
    "Lisa Jewell",
    422,
    0,
    8.99,
    false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);
console.log(
    book1.openBook(),
    book1.nextPage(),
    book1.prevPage(),
    book1.prevPage()
);
console.log(book3.goToPage(25), book3.closeBook());
console.log(book5.goToPage(book5.pages), book5.nextPage());
