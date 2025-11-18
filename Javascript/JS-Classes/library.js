class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true;
      return "Book issued successfully.";
    } else {
      return "Book is already issued.";
    }
  }

  returnBook() {
    if (this.isIssued) {
      this.isIssued = false;
      return "Book returned successfully.";
    } else {
      return "Book was not issued.";
    }
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "101"),
  new Book("Atomic Habits", "James Clear", "102"),
  new Book("Sherlock Holmes", "Arthur Conan Doyle", "103"),
  new Book("Harry Potter", "J.K. Rowling", "104"),
  new Book("Deep Work", "Cal Newport", "105")
];

function showAvailableBooks() {
  const available = books.filter(book => !book.isIssued);
  console.log("Available Books:");
  available.forEach(b => {
    console.log(`${b.title} by ${b.author} (ISBN: ${b.ISBN})`);
  });
}

function issueBookByISBN(isbn) {
  const book = books.find(b => b.ISBN === isbn);
  if (book) {
    console.log(book.issueBook());
  } else {
    console.log("Book not found.");
  }
}

showAvailableBooks();  
console.log("Issuing book with ISBN 103:");
issueBookByISBN("103");

console.log("\nAvailable books after issuing:");
showAvailableBooks();
