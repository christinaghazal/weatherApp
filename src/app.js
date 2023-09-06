
import { createWeatherCard } from "./view/cardEle.js";
import { showError } from "./helpers/errorMsg.js";
import { fetchImageFromUnsplash, checkWeather } from "./helpers/asyncUtils.js";

// Initialize the weather card

createWeatherCard();


// Add event listeners after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");

  searchBtn.addEventListener("click", () => {
    const searchTerm = searchBox.value;
    if (searchTerm) {
      checkWeather(searchTerm);
      fetchImageFromUnsplash(searchTerm);
     } else {
      showError("Enter City Name!");
     }
 
  });
});

            