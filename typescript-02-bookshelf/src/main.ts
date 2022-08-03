import { Bookshelf } from "./BookShelf";
import { Book } from "./Book";

let bs1 = new Bookshelf();
/*random Data */
for (let i = 1; i < 41; i++) {
  bs1.addBook(new Book(`HarryPotter ${i}`, `janos`, 1990 + i + 3, i * 122));
  bs1.addBook(new Book(`Bosszuallok ${i}`, `Marvel`, 1986 + i + 2, i * 148));
  bs1.addBook(new Book(`Star Wars ${i}`, `GL`, 1981 + i + 1, i * 98));
}

console.log(bs1.getBooks(2006));
console.log(bs1.getLightestAuthor());
bs1.printBooks();
console.log(bs1.getAuthorOfMostWrittenPages());
