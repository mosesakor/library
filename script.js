let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read == true ? 'read' : 'not read yet'}`
  }
}

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', 295, true)
console.log(book1.info())

myLibrary.push(book1)

for (let i=0; i<myLibrary.length; i++) {
  
}

function addBookToLibrary() {
  // do stuff here
}