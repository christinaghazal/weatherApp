

 export const showError = (message) => {
    const elements = document.querySelectorAll(".error, .weather");
    elements.forEach(element => element.style.display = element.classList.contains("error") ? "block" : "none");
    document.querySelector(".error p").innerText = message;
  };
  