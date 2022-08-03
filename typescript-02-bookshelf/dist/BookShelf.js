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
    getAuthorOfMostWrittenPages() {
        let authorListMap = new Map();
        this._books.forEach(book => {
            authorListMap.set(book.getAuthor(), book.getNumberOfPages());
        });
        const iterator1 = authorListMap[Symbol.iterator]();
        let legtobbOldal = 0;
        let legtobbOldalAuthor = '';
        for (const item of iterator1) {
            let iro = item[0];
            let oldal = item[1];
            if (legtobbOldal < oldal) {
                legtobbOldal = oldal;
                legtobbOldalAuthor = iro;
            }
        }
        return legtobbOldalAuthor;
    }
}
exports.Bookshelf = Bookshelf;
