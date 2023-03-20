function cards() {
  class MenuCard {
    constructor(image, alt, title, descr, price, parentSelector, ...classes) {
      this.image = image;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.class = classes;
      this.transfer = 36;
      this.changeToUAH();
      this.parent = document.querySelector(parentSelector);
    }
    changeToUAH() {
      this.price = this.price * this.transfer;
    }
    render() {
      const element = document.createElement("div");
      if (this.class.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.class.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = `
                        <img src="${this.image}" alt=${this.alt}>
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
          `;
      this.parent.append(element);
    }
  }

  axios.get("http://localhost:3000/menu").then((data) => {
    data.data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });
}
module.exports = cards;
