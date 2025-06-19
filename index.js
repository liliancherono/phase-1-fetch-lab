// index.js

export function renderBooks(books) {
  const container = document.getElementById("book-list");
  if (!container) return;

  container.innerHTML = "";
  books.forEach(book => {
    const p = document.createElement("p");
    p.textContent = book.name;
    container.appendChild(p);
  });
}

export function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(books => {
      renderBooks(books);  // This will now find renderBooks!
      return books;
    });
}
