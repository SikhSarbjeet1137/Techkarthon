function addBook(category) {
    let section = document.getElementById(category);
    let bookContainer = section.querySelector(".book-container");

    let inputs = section.querySelectorAll("input");
    let title = inputs[0].value;
    let author = inputs[1].value;
    let edition = inputs[2].value;

    let newBook = document.createElement("div");
    newBook.classList.add("book-card");
    newBook.innerHTML = `
        <div class="book-front">${title}</div>
        <div class="book-back">Author: ${author}<br>Edition: ${edition}</div>
    `;

    bookContainer.appendChild(newBook);
    
    inputs.forEach(input => input.value = "");
}
