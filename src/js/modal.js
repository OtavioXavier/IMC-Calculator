export const Modal = {
    closeButton: document.querySelector(".modal .tittle button"),
    text: document.querySelector(".modal .tittle  span"),
    wrapper: document.querySelector(".modal-wrapper"),
  
    open() {
      Modal.wrapper.classList.add("open");
    },
    close() {
      Modal.wrapper.classList.remove("open");
    },
  };

  Modal.closeButton.onclick = () => {
    Modal.close();
    inputHeigth.value = "";
    inputWeight.value = "";
  };

  window.addEventListener('keydown', handleKeydown)

  function handleKeydown(event) {
     if(event.key === 'Escape' || (event.key === 'Enter')) {
        Modal.close();
     }
  }