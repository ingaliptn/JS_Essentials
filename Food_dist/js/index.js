"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const tabs = require("./modules/tabs"),
    timer = require("./modules/timer"),
    slider = require("./modules/slider"),
    modal = require("./modules/modal"),
    form = require("./modules/form"),
    cards = require("./modules/cards"),
    calculator = require("./modules/calculator");

  tabs();
  timer();
  slider();
  modal();
  form();
  cards();
  calculator();
});
