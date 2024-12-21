let resultado = document.getElementById("resultado");
let botonclima = document.getElementById('botonclima');
let cityRef = document.getElementById('city');
let key = '69023853454b77bb14f59764b1216bff';


let getWeather = () => {
    let cityValue = cityRef.value;
    if (cityValue.length == 0){
        
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric&lang={es}`;
       
        cityRef.value= "";
        fetch(url).then((resp) => resp.json()).then(data => {
           
            console.log('temperatura '+(data.main.temp)+'°');
            resultado.innerHTML = `<h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].description}</h4>
            <h4>${data.main.temp} &#176</h1>`;
        })
        .catch(() => {
            resultado.innerHTML = `<h2>ciudad no encontrada</h2>`;
        })
    };
};
botonclima.addEventListener('click', getWeather);

window.addEventListener("load", getWeather);