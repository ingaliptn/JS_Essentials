"use strict";

const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

function showGoodFilms(arr) {
  return arr.filter((i) => i.rating >= 8);
}

function showListOfFilms(arr) {
  return arr.reduce(
    (acc, curr) => `${typeof acc === "object" ? acc.name : acc}, ${curr.name}`
  );
}

function setFilmsIds(arr) {
  return arr.map((film, i) => {
    film.id = i;
    return film;
  });
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every((film) => film.id || films.id === 0 ? true : false);
}
