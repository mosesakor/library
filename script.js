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
  let userInput = getUserInput();
  if (isRead() == true) userInput[userInput.length-1] = true
  const book = new Book(...userInput);
  myLibrary.push(book);
  resetForm();
  displayBooks();
  closeForm();
}

function getUserInput() {
  return Object.values(Array.from(document.querySelectorAll('input')).reduce((a, input) => ({...a, [input.id]: input.value}), {}));
}

function isRead() {
  return document.getElementById('read').checked
}

function displayBooks() {
  const booksContainer = document.getElementById('booksContainer');
  const books = document.querySelectorAll('li');
  books.forEach(book => booksContainer.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    addBookToPage(myLibrary[i])
  }
}

function addBookToPage(book) {
    const bookIndex = myLibrary.indexOf(book);
    const list = document.querySelector('ul');

    const listItem = document.createElement('li');
    const title = document.createElement('span');
    const author = document.createElement('span');
    const pages = document.createElement('span');
    const read = document.createElement('span')
    const readBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    

    listItem.appendChild(title);
    listItem.appendChild(author);
    listItem.appendChild(pages);
    listItem.appendChild(read);
    listItem.appendChild(readBtn);
    listItem.appendChild(deleteBtn);
    title.textContent = `Title: ${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    read.textContent = `Read: ${book.read == true ? 'Yes' : 'Not read yet'}`;

    readBtn.textContent = 'Read/Unread';
    deleteBtn.textContent = 'Delete';
    listItem.dataset.id = bookIndex;
    list.appendChild(listItem);

    readBtn.onclick = function(e) {
      myLibrary[bookIndex].read == true ? myLibrary[bookIndex].read = "" : myLibrary[bookIndex].read = true
      read.textContent = `Read: ${book.read == true ? 'Yes' : 'Not read yet'}`;
    }

    deleteBtn.onclick = function(e) {
      myLibrary.splice(bookIndex, 1)
      list.removeChild(listItem);
      displayBooks();
    }
  }

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function resetForm() {
  document.getElementById("form").reset()
}

const openFormBtn = document.getElementById("addBook");
openFormBtn.onclick = openForm;

const closeFormBtn = document.getElementById("close");
closeFormBtn.onclick = closeForm;

const addBookBtn = document.getElementById("addBtn");
addBookBtn.onclick = addBookToLibrary;