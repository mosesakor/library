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



function addBookToLibrary() {
  // do stuff here

  const book1 = new Book('The Hobbit', 'J.R.R Tolkien', 295, true)
  console.log(book1.info())

  myLibrary.push(book1)
  const books = document.querySelector('div');

  for (let i=0; i<myLibrary.length; i++) {
    const para = document.createElement('p');
    para.textContent = myLibrary[i].info();
    books.appendChild(para);
  }
}

addBookToLibrary()


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const openFormBtn = document.getElementById("addBook")
openFormBtn.onclick = openForm

const closeFormBtn = document.getElementById("close")
closeFormBtn.onclick = closeForm