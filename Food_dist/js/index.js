"use strict";
import tabs from "./modules/tabs";
import timer from "./modules/timer";
import slider from "./modules/slider";
import modal from "./modules/modal";
import form from "./modules/form";
import cards from "./modules/cards";
import calculator from "./modules/calculator";
import { openModal } from "./modules/modal";
import 'jquery';

window.addEventListener("DOMContentLoaded", () => {
  const modalTimeId = setTimeout(() => openModal(".modal", modalTimeId), 50000);

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  timer(".timer", "2023-5-20");
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  modal("[data-modal]", ".modal", modalTimeId);
  form("form", modalTimeId);
  cards();
  calculator();
});
