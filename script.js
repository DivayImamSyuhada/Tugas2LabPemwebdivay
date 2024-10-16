// Referensi ke elemen root
const root = document.querySelector(".root");

// Membuat elemen <h1>
const heading = document.createElement("h1");
heading.textContent = "Tugas-2 Praktikum Pemrograman Web";
root.appendChild(heading);

// Membuat elemen form
const form = document.createElement("form");
form.id = "uploadForm";
form.enctype = "multipart/form-data";

// Membuat input Username
const labelUsername = document.createElement("label");
labelUsername.setAttribute("for", "username");
labelUsername.textContent = "Username";
form.appendChild(labelUsername);

const inputUsername = document.createElement("input");
inputUsername.type = "text";
inputUsername.id = "username";
inputUsername.name = "username";
inputUsername.required = true;
form.appendChild(inputUsername);
form.appendChild(document.createElement("br"));

// Membuat input NIM
const labelNim = document.createElement("label");
labelNim.setAttribute("for", "nim");
labelNim.textContent = "NIM";
form.appendChild(labelNim);

const inputNim = document.createElement("input");
inputNim.type = "text";
inputNim.id = "nim";
inputNim.name = "nim";
inputNim.required = true;
form.appendChild(inputNim);
form.appendChild(document.createElement("br"));

// Membuat input KOM
const labelKom = document.createElement("label");
labelKom.setAttribute("for", "kom");
labelKom.textContent = "KOM";
form.appendChild(labelKom);

const inputKom = document.createElement("input");
inputKom.type = "text";
inputKom.id = "kom";
inputKom.name = "kom";
inputKom.required = true;
form.appendChild(inputKom);
form.appendChild(document.createElement("br"));

// Membuat input file Photo
const labelPhoto = document.createElement("label");
labelPhoto.setAttribute("for", "photo");
labelPhoto.textContent = "Upload Photo";
form.appendChild(labelPhoto);

const inputPhoto = document.createElement("input");
inputPhoto.type = "file";
inputPhoto.id = "photo";
inputPhoto.name = "photo";
inputPhoto.accept = "image/*";
inputPhoto.required = true;
form.appendChild(inputPhoto);
form.appendChild(document.createElement("br"));

// Membuat tombol Submit
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
form.appendChild(submitButton);

// Tambahkan form ke root
root.appendChild(form);

// Membuat div untuk hasil
const resultDiv = document.createElement("div");
resultDiv.id = "result";
resultDiv.style.display = "none";

const previewImage = document.createElement("img");
previewImage.id = "preview";
previewImage.alt = "Uploaded Photo";
resultDiv.appendChild(previewImage);

const usernameResult = document.createElement("p");
usernameResult.innerHTML = 'Username: <span id="resultUsername"></span>';
resultDiv.appendChild(usernameResult);

const nimResult = document.createElement("p");
nimResult.innerHTML = 'NIM: <span id="resultNim"></span>';
resultDiv.appendChild(nimResult);

const komResult = document.createElement("p");
komResult.innerHTML = 'KOM: <span id="resultKom"></span>';
resultDiv.appendChild(komResult);

// Tambahkan div result ke root
root.appendChild(resultDiv);

// Menambahkan event listener untuk menampilkan hasil setelah submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Menampilkan data yang diinputkan
  document.getElementById("resultUsername").textContent = inputUsername.value;
  document.getElementById("resultNim").textContent = inputNim.value;
  document.getElementById("resultKom").textContent = inputKom.value;

  // Menampilkan preview gambar
  const file = inputPhoto.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    previewImage.src = e.target.result;
  };
  reader.readAsDataURL(file);

  // Menampilkan div result
  resultDiv.style.display = "block";
});
