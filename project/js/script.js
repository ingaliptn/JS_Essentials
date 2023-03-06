"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const adv = document.querySelectorAll(".promo__adv img"),
  poster = document.querySelector(".promo__bg"),
  genre = poster.querySelector(".promo__genre"),
  resent = document.querySelector(".promo__interactive-list"),
  filmForm = document.querySelector(".add"),
  addFilm = filmForm.querySelector("button"),
  checkFilm = document.querySelector("input[type='checkbox']"),
  filmName = filmForm.querySelector("input");

//adv.remove();
adv.forEach((i) => {
  i.remove();
});
resent.innerHTML = "";

genre.textContent = "ДРАМА";
poster.style.backgroundImage = 'url("img/bg.jpg")';

function showMovie() {
  movieDB.movies.sort();
  resent.innerHTML = "";
  movieDB.movies.forEach((film, i) => {
    resent.innerHTML += `
    <li class="promo__interactive-item">${++i}. ${film}
                            <div class="delete"></div>
                        </li>
    `;
  });

  document.querySelectorAll(".delete").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
      movieDB.movies.splice(i, 1);
      showMovie();
    });
  });
}
showMovie();

addFilm.addEventListener("click", (e) => {
  e.preventDefault();
  let fName = filmName.value;
  if (fName.length > 21) {
    fName = fName.slice(0, 21);
    fName += "...";
  }
  if (checkFilm.checked == true) {
    console.log("Добавляем любимый фильм");
  }
  movieDB.movies.push(fName);
  showMovie();
});
