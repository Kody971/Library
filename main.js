const myLibrary = [];

let Book = (name, author, pages, readed) => {
  id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = readed;
};

const showLibrary = (arr) => {
  arr.forEach((book) => {
    const main = document.querySelector("main");
    const card = document.createElement("div");
    card.classList.add("card");

    const author = document.createElement("h2");
    author.textContent = book.name;
    card.appendChild(author);

    const title = document.createElement("p");
    title.textContent = book.title;
    card.appendChild(title);

    const pages = document.createElement("p");
    pages.textContent = book.pages;
    card.appendChild(pages);

    const readed = document.createElement("div");
    readed.textContent = book.read ? "Read" : "Unread";
    card.appendChild(readed);
  });
};

const addBookToLibrary = (event) => {
  const form = event.target;
  const name = form.elements.name.value;
  const author = form.elements.author.value;
  const pages = form.elements.pages.value;
  const readed = form.elements.read.value;

  const newBook = new Book(name, author, pages, readed);
  myLibrary.push(newBook);
};
