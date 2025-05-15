interface Book{
    title:string
    author:string
    isbn:string
    publishedYear:number
    genre?:string
}

class Library{
    // private books:Book[] = []
    protected books:Book[] = [] // i made it protected so i can access it in the child class DigitalLibrary

    public addBook(book:Book){
        this.books.push(book);
    }

    public getBookDetails(isbn:string):string{
        const book = this.books.find(book => book.isbn === isbn)
        if(!book){
            return `Book Not Found`
        }
        return `Title: ${book.title}, 
                Author: ${book.author}, 
                Isbn: ${book.isbn}, 
                Published Year: ${book.publishedYear},
                ${book.genre ? 'Genre: ' + book.genre : '' }
                `
    }
}

class DigitalLibrary extends Library{
    readonly website:string

    constructor(website: string) {
        super();
        this.website = website;
      }

    listBooks():string[]{
        return this.books.map(book => book.title)
    }
}

const libray1 = new DigitalLibrary('www.libBooks.com')

const book1: Book = {
    title: "The TypeScript",
    author: "Ahmad Pol",
    isbn: "788953323727",
    publishedYear: 2020,
    genre: "Programation"
  };
  
const book2: Book = {
    title: "The JavaScript",
    author: "Amine Lori",
    isbn: "063326042366",
    publishedYear: 2018
};

const book3: Book = {
    title: "The Python",
    author: "Imad Genius",
    isbn: "063322323727",
    publishedYear: 2012,
    genre: "Programation"
};

libray1.addBook(book1);
libray1.addBook(book2);
libray1.addBook(book3);

console.log(libray1.getBookDetails('063326042366'))