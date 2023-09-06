import { showWeather, setBodyBackground } from "../view/appView.js";
import {  API_KEY_ENDPOINT_CITY, API_URL, API_IMG_URL, IMG_ACCESS_KEY } from "../helpers/constants.js"

// Fetch image from Unsplash API
export async function fetchImageFromUnsplash(searchTerm) {
    try {
      const response = await fetch(API_IMG_URL + `${searchTerm}&client_id=${IMG_ACCESS_KEY}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const firstImageUrl = data.results[0].urls.regular;
        setBodyBackground(firstImageUrl);
      } else {
        console.log("No images found for the search term.");
      }
    } catch (error) {
      console.error("There was an error fetching the image:", error);
    }
  }
  
  
  // Check weather function
  export async function checkWeather(city) {
    try {
      const response = await fetch(API_URL + city + `&appid=${API_KEY_ENDPOINT_CITY}`);
      let data = await response.json();
       showWeather(data);
  
    } catch (error) {
      showError("City Not Found!");
    }
  }
  