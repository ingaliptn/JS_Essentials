function openModal(modalSel, modalTimeId) {
  const modalWindow = document.querySelector(modalSel);
  modalWindow.style.display = "block";
  document.body.style.overflow = "hidden";
  if (modalTimeId) {
    clearInterval(modalTimeId);
  }
}

function closeModalWindow(modalSel) {
  const modalWindow = document.querySelector(modalSel);
  modalWindow.style.display = "none";
  document.body.style.overflow = "";
}

function modal(triggerSel, modalSel, modalTimeId) {
  const btnModal = document.querySelectorAll(triggerSel),
    modalWindow = document.querySelector(modalSel);

  btnModal.forEach((i) => {
    i.addEventListener("click", () => openModal(modalSel, modalTimeId));
  });

  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow || e.target.getAttribute("data-close") == "")
      closeModalWindow(modalSel);
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalWindow.style.display === "block")
      closeModalWindow(modalSel);
  });

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal(modalSel, modalTimeId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}
export default modal;
export { closeModalWindow, openModal };
