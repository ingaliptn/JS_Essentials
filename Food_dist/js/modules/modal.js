function modal() {
  const btnModal = document.querySelectorAll("[data-modal]"),
    modalWindow = document.querySelector(".modal");

  function openModal() {
    modalWindow.style.display = "block";
    document.body.style.overflow = "hidden";
    clearInterval(modalTimeId);
  }

  function closeModalWindow() {
    modalWindow.style.display = "none";
    document.body.style.overflow = "";
  }

  btnModal.forEach((i) => {
    i.addEventListener("click", openModal);
  });

  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow || e.target.getAttribute("data-close") == "")
      closeModalWindow();
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalWindow.style.display === "block")
      closeModalWindow();
  });

  const modalTimeId = setTimeout(openModal, 50000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}
module.exports = modal;
