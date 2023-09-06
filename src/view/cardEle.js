export function createWeatherCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="search">
            <input type="text" placeholder="enter city name" spellcheck="false">
            <button id="searchBtn"><img src="public/img/search.png"></button>
        </div>
        <div class="error">
            <p>Enter city name</p>
        </div>
        <div class="weather">
            <img src="public/img/rain.png" class="weather-icon">
            <h1 class="temp">22°C</h1>
            <h2 class="city">Syria</h2>
            <div class="details">
                <div class="col">
                    <img src="public/img/humidity.png">
                    <div>
                        <p class="humidity">50%</p>
                        <p>humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="public/img/wind.png">
                    <div>
                        <p class="wind">15 km/h</p>
                        <p>wind speed</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(card);
}





