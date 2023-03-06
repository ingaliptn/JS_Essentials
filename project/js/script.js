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

const delAdv = (arr) => {
  arr.forEach((i) => {
    i.remove();
  });
};

const makeChange = () => {
  resent.innerHTML = "";
  genre.textContent = "ДРАМА";
  poster.style.backgroundImage = 'url("img/bg.jpg")';
};

const sortArr = (arr) => {
  arr.sort();
};

function showMovie(parent, film) {
  parent.innerHTML = "";
  sortArr(movieDB.movies);
  film.movies.forEach((film, i) => {
    parent.innerHTML += `
    <li class="promo__interactive-item">${++i}. ${film}
                            <div class="delete"></div>
                        </li>
    `;
  });

  document.querySelectorAll(".delete").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
      movieDB.movies.splice(i, 1);
      showMovie(parent, film);
    });
  });
}
const addFilmToArr = () => {
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
    showMovie(resent, movieDB);
  });
};

delAdv(adv);
makeChange();
sortArr(movieDB.movies);
showMovie(resent, movieDB);
addFilmToArr()
