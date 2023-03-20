function calculator() {
  const result = document.querySelector(".calculating__result span");
  let sex, height, weight, age, ratio;

  if (localStorage.getItem("SexClick")) {
    sex = localStorage.getItem("SexClick");
  } else {
    sex = "female";
    localStorage.setItem("SexClick", "female");
  }
  if (localStorage.getItem("RatioClick")) {
    ratio = localStorage.getItem("RatioClick");
  } else {
    ratio = 1.375;
    localStorage.setItem("RatioClick", 1.375);
  }

  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((i) => {
      i.classList.remove(activeClass);
      if (i.getAttribute("id") === localStorage.getItem("SexClick")) {
        i.classList.add(activeClass);
      }
      if (i.getAttribute("data-ratio") === localStorage.getItem("RatioClick")) {
        i.classList.add(activeClass);
      }
    });
  }
  initLocalSettings("#gender div", "calculating__choose-item_active");
  initLocalSettings(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = "____";
      return;
    }
    if (sex === "female") {
      result.textContent = Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
      );
    } else {
      result.textContent = Math.round(
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
      );
    }
  }
  calcTotal();

  function getStaticInformation(selector, active) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
          localStorage.setItem(
            "RatioClick",
            +e.target.getAttribute("data-ratio")
          );
        } else {
          sex = e.target.getAttribute("id");
          localStorage.setItem("SexClick", e.target.getAttribute("id"));
        }

        elements.forEach((elem) => {
          elem.classList.remove(active);
        });
        e.target.classList.add(active);
        calcTotal();
      });
    });
  }
  getStaticInformation("#gender div", "calculating__choose-item_active");
  getStaticInformation(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function getInfo(selector) {
    const input = document.querySelector(selector);

    input.addEventListener("input", () => {
      if (input.value.match(/\D/g)) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "none";
      }

      switch (input.getAttribute("id")) {
        case "height":
          height = +input.value;
          break;
        case "weight":
          weight = +input.value;
          break;
        case "age":
          age = +input.value;
          break;
      }
      calcTotal();
    });
  }
  getInfo("#height");
  getInfo("#weight");
  getInfo("#age");
}
export default calculator;
