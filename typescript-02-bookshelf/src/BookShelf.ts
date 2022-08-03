import { Book } from "./Book";

export class Bookshelf {
    private _books:Book[]
    constructor(){
        this._books = [];
    }

    addBook(book:Book):void {
        this._books.push(book);
    }
    getBooks(year:number):Book[]{
        let okeyBooks:Book[] = [];
        this._books.forEach(book => book.getReleaseYear() == year && okeyBooks.push(book));
        return okeyBooks;
    }
    getLightestAuthor():string{

        let author:string =''
        let weight:number =Number.MAX_SAFE_INTEGER;
        
        this._books.forEach(book => {
            if(weight > book.calculateWeight()){
                weight = book.calculateWeight();
                author = book.getAuthor();
            }
        })
        return author;
    }
    printBooks():void{
        this._books.forEach(book => console.log(book.getBookInfo()))
    }
   /*
    getAuthorOfMostWrittenPages():string{
        let authorListMap: Map<string,number> = new Map<string,number>();
        this._books.forEach(book =>{
            authorListMap.set(book.getAuthor(),book.getNumberOfPages())
        });
        authorListMap.forEach(author => console.log(author))
        console.log(Object.keys(authorListMap))
        return 'asdasdasdasdasdasdasdasdasdasdas        das'
    }
   */
}