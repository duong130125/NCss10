class Book {
    private title: string;
    private author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }
}

class Library {
    private books: Book[];
    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        if (this.books.length < 10) { 
            this.books.push(book);
        } else {
            console.log("Thư viện đã đầy. Không thể thêm sách mới.");
        }
    }

    displayBooks(): void {
        console.log("Các sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`Tiêu đề: ${book.getTitle()}, Tác giả: ${book.getAuthor()}`);
        });
    }
}

let sach1 = new Book("Cỏ Lau", "Việt Phương");
let sach2 = new Book("Đường Xa", "Văn Cao");
let sach3 = new Book("Tầm Nhìn", "Đình Hoàng");
let sach4 = new Book("Cuộc Sống", "Châu Phong");
let sach5 = new Book("Bóng Đêm", "Đặng Tâm");

let thuVien = new Library();

thuVien.addBook(sach1);
thuVien.addBook(sach2);
thuVien.addBook(sach3);
thuVien.addBook(sach4);
thuVien.addBook(sach5);

thuVien.displayBooks();
