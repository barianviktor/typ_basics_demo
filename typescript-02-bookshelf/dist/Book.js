"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, releaseYear, numberOfPages) {
        this._title = title;
        this._author = author;
        this._releaseYear = releaseYear;
        this._numberOfPages = numberOfPages;
    }
    getReleaseYear() { return this._releaseYear; }
    getAuthor() { return this._author; }
    getNumberOfPages() { return this._numberOfPages; }
    calculateWeight() { return 100 + this._numberOfPages * 10; }
    getBookInfo() { return `title: ${this._title} author: ${this._author} releaseYear: ${this._releaseYear}   numberOfPages: ${this._numberOfPages}`; }
}
exports.Book = Book;
