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


function getUserInput() {
  return Object.values(Array.from(document.querySelectorAll('input')).reduce((a, input) => ({...a, [input.id]: input.value}), {}));
}

function addBookToLibrary() {
  const userInput = getUserInput();
  const book = new Book(...userInput);
  myLibrary.push(book);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const openFormBtn = document.getElementById("addBook");
openFormBtn.onclick = openForm;

const closeFormBtn = document.getElementById("close");
closeFormBtn.onclick = closeForm;

const addBookBtn = document.getElementById("addBtn");
addBookBtn.onclick = addBookToLibrary;