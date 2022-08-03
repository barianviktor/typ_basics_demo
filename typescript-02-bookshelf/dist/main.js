"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookShelf_1 = require("./BookShelf");
const Book_1 = require("./Book");
let bs1 = new BookShelf_1.Bookshelf();
/*random Data */
for (let i = 1; i < 41; i++) {
    bs1.addBook(new Book_1.Book(`HarryPotter ${i}`, `janos`, 1990 + i + 3, i * 122));
    bs1.addBook(new Book_1.Book(`Bosszuallok ${i}`, `Marvel`, 1986 + i + 2, i * 148));
    bs1.addBook(new Book_1.Book(`Star Wars ${i}`, `GL`, 1981 + i + 1, i * 98));
}
console.log(bs1.getBooks(2006));
console.log(bs1.getLightestAuthor());
bs1.printBooks();
//bs1.getAuthorOfMostWrittenPages()
