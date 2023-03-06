/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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
  deleteBtn = resent.querySelectorAll('.delete'),
  filmForm = document.querySelector(".add"),
  addFilm = filmForm.querySelector("button"),
  filmName = filmForm.querySelector("input");

deleteBtn[0].addEventListener('click', (e)=>{
  console.log("delete");
})


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
}
showMovie();

addFilm.addEventListener("click", (e) => {
  e.preventDefault();
  let fName = filmName.value;
  if(fName.length > 21){
    fName = fName.slice(0,21);
    fName += '...';
  }
  movieDB.movies.push(fName);
  showMovie();
});
