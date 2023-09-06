export const showWeather = (data) => {
  const updateElementContent = (selector, content) => {
    document.querySelector(selector).innerHTML = content;
  };

 const setWeatherIcon = (weatherMain) => {
    const weatherIconSrc = {
      "Clouds": "public/img/clouds.png",
      "Clear": "public/img/clear.png",
      "Rain": "public/img/rain.png",
      "Drizzle": "public/img/drizzle.png",
      "Mist": "public/img/mist.png"
    };

    const weatherIcon = document.querySelector(".weather-icon");
    weatherIcon.src = weatherIconSrc[weatherMain] || "public/img/rain.png";
  };

  updateElementContent(".city", data.name);
  updateElementContent(".temp", `${Math.round(data.main.temp)}°C`);
  updateElementContent(".humidity", `${data.main.humidity}%`);
  updateElementContent(".wind", `${data.wind.speed} km/h`);
  setWeatherIcon(data.weather[0].main);

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
};


/////////////////////////////////

// Set body background image

export const setBodyBackground = (url) => {
  document.body.style.backgroundImage = `url(${url})`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
};



  