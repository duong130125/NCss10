class Book {
    private title: string;
    private author: string;
    private quantity: number;

    constructor(title: string, author: string, quantity: number = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getQuantity(): number {
        return this.quantity;
    }

    increaseQuantity(): void {
        this.quantity++;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        let found = false;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getTitle() === book.getTitle() && this.books[i].getAuthor() === book.getAuthor()) {
                this.books[i].increaseQuantity();
                found = true;
                break;
            }
        }
        if (!found) {
            this.books.push(book);
        }
    }

    displayBooks(): void {
        console.log("Các sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`Tiêu đề: ${book.getTitle()}, Tác giả: ${book.getAuthor()}, Số lượng: ${book.getQuantity()}`);
        });
    }
}

let sach1 = new Book("Sách 1", "Tác giả 1");
let sach2 = new Book("Sách 2", "Tác giả 2");
let sach3 = new Book("Sách 3", "Tác giả 3");
let sach4 = new Book("Sách 1", "Tác giả 1"); 
let sach5 = new Book("Sách 5", "Tác giả 5", 2); 

let thuVien = new Library();

thuVien.addBook(sach1);
thuVien.addBook(sach2);
thuVien.addBook(sach3);
thuVien.addBook(sach4);
thuVien.addBook(sach5);

thuVien.displayBooks();
