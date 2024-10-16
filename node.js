// Ambil elemen div dengan class "root"
const root = document.querySelector(".root");

// Buat elemen baru
const card = document.createElement("div");
card.classList.add("card");

// Tambahkan elemen h1
const title = document.createElement("h1");
title.textContent = "Hello, World!";
card.appendChild(title);

// Tambahkan elemen paragraf
const paragraph = document.createElement("p");
paragraph.textContent =
  "This is a dynamically created content using JavaScript.";
card.appendChild(paragraph);

// Tambahkan elemen card ke dalam root
root.appendChild(card);
