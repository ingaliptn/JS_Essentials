"use strict";

// localStorage.setItem("number", 5);

// localStorage.getItem("number");

// localStorage.removeItem("number");

const checkBox = document.querySelector("#checkbox"),
  form = document.querySelector("form"),
  change = document.querySelector("#color");

if (localStorage.getItem("isChecked")) {
  checkBox.checked = true;
}

if (localStorage.getItem("bg") === "changed") {
  form.style.backgroundColor = "red";
}

checkBox.addEventListener("change", () => {
  localStorage.setItem("isChecked", true);
});

change.addEventListener("click", () => {
  if (localStorage.getItem("bg") === "changed") {
    localStorage.removeItem("bg");
    form.style.backgroundColor = "#fff";
  } else {
    localStorage.setItem("bg", "changed");
    form.style.backgroundColor = "red";
  }
});

const persone = {
  name: "Mykyta",
  age: 20,
};
const serializedPersone = JSON.stringify(persone);
localStorage.setItem('persone', serializedPersone);
