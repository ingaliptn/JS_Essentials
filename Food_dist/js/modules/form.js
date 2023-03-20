function form() {
  const forms = document.querySelectorAll("form");

  const message = {
    loading: "img/form/spinner.svg",
    done: "Спасибо, мы с Вами свяжемся в скором времени!",
    error: "Упс... Что-то пошло не так, попробуйте еще раз",
  };

  forms.forEach((i) => {
    bindPostData(i);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;`;
      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData("http://localhost:3000/requests", json)
        .then((data) => {
          showThanksModal(message.done);
          console.log(data);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.error);
          console.log(data);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(mess) {
    const prevModal = document.querySelector(".modal__dialog");

    prevModal.classList.add("hide");
    openModal();

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
        <div class="modal__content">
        <div class="modal__close" data-close>x</div>
        <div class="modal__title">${mess}</div>
        </div>
        `;

    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModal.classList.add("show");
      prevModal.classList.remove("hide");
      closeModalWindow();
    }, 4000);
  }

  fetch("http://localhost:3000/menu")
    .then((data) => data.json())
    .then((res) => console.log(res));
}
module.exports = form;
