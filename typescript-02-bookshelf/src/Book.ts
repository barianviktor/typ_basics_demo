export class Book {
  private _title: string;
  private _author: string;
  private _releaseYear: number;
  private _numberOfPages: number;
  constructor(
    title: string,
    author: string,
    releaseYear: number,
    numberOfPages: number
  ) {
    this._title = title;
    this._author = author;
    this._releaseYear = releaseYear;
    this._numberOfPages = numberOfPages;
  }
  getReleaseYear(): number {
    return this._releaseYear;
  }
  getAuthor(): string {
    return this._author;
  }
  getNumberOfPages(): number {
    return this._numberOfPages;
  }
  calculateWeight(): number {
    return 100 + this._numberOfPages * 10;
  }
  getBookInfo(): string {
    return `title: ${this._title} author: ${this._author} releaseYear: ${this._releaseYear}   numberOfPages: ${this._numberOfPages}`;
  }
}
