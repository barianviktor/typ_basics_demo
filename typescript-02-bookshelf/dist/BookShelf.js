"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookshelf = void 0;
class Bookshelf {
    constructor() {
        this._books = [];
    }
    addBook(book) {
        this._books.push(book);
    }
    getBooks(year) {
        let okeyBooks = [];
        this._books.forEach(book => book.getReleaseYear() == year && okeyBooks.push(book));
        return okeyBooks;
    }
    getLightestAuthor() {
        let author = '';
        let weight = Number.MAX_SAFE_INTEGER;
        this._books.forEach(book => {
            if (weight > book.calculateWeight()) {
                weight = book.calculateWeight();
                author = book.getAuthor();
            }
        });
        return author;
    }
    printBooks() {
        this._books.forEach(book => console.log(book.getBookInfo()));
    }
}
exports.Bookshelf = Bookshelf;
