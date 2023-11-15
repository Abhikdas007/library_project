let titel;
let author;
let page;
let isRead;
const myLibrary = [];
cardcontainer = document.getElementById("cardcontainer");

document.addEventListener("DOMContentLoaded", function () {
  // Get the form and the modal
  var myForm = document.getElementById("myForm");
  var modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  // console.log("hi");
  // Add a submit event listener to the form
  myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Your form submission logic here
    titel = document.getElementById("titel").value;
    author = document.getElementById("author").value;
    page = document.getElementById("page").value;
    isRead = document.getElementById("isread").checked;
    console.log(isRead);
    const book1 = new Book(titel, author, page, isRead);
    addBookToLibrary(book1);

    document.getElementById("titel").value = "";
    document.getElementById("author").value = "";
    document.getElementById("page").value = "";
    document.getElementById("isread").checked = false;


    // Close the modal after form submission
    modal.hide();
    return false;
  });
});

function Book(title, author, page, isRead) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.isRead = isRead; 
}

function addBookToLibrary(arr) {
  myLibrary.push(arr);

  cardcontainer.innerHTML = '';


  myLibrary.forEach((item, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'col-md-3', 'm-5');
    cardElement.innerHTML = `<ul>
    <li> ${item.title}</li>
    <li>${item.author}</li>
    <li>${item.page} Pages</li>
    <li>${item.isRead}</li>
    <a class='btn btn-primary' onclick="removeCard(${index})">Remove</a>
    </ul>`;
    cardcontainer.appendChild(cardElement);
  });

}

function removeCard(index) {
  // Remove the card from the array
  myLibrary.splice(index, 1);
  // Remove the corresponding card element from the DOM
  const cardToRemove = document.querySelector(`.card:nth-child(${index + 1})`);
  cardToRemove.remove();
}