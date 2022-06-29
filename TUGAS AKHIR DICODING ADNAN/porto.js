const tombol = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-items");

// responsive burger menu
let hitung = 0;
tombol.addEventListener("click", () => {
  hitung++;
  if (hitung % 2 == 1) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});

// localStorage.clear();

// const form = document.querySelector("form");
// const input = document.querySelector("#input");
// const comment = document.querySelector(".comment");

// let userKey;
// let number;

// for (let i = 0; i <= localStorage.getItem(userKey); i++) {
//   comment.innerHTML += `
//   <p>${localStorage.getItem(`${"user"}${i}`)}</p>
//   `;
// }

// if (typeof Storage != "undefined") {
//   if (localStorage.getItem(userKey) === null) {
//     localStorage.setItem(userKey, 0);
//   }
//   number = localStorage.getItem(userKey);

//   form.addEventListener("submit", (e) => {
//     localStorage.setItem(`${"user"}${number}`, input.value);
//     comment.innerHTML += `
//       <p>${localStorage.getItem(`${"user"}${number}`)}</p>
//       `;
//     number++;
//     input.value = "";
//     e.preventDefault();
//   });
// }
