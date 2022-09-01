import { popup } from "./comments.js";
const closePopup = () => {
    document.querySelector('.close').addEventListener('click', () => {
      popup.style.display = 'none';
      popup.innerHTML = '';
      document.body.style.overflow = 'visible';
    });
  };

  export default closePopup;