let xhrCo;
const Colombia = 'Bogota,Co';

if(window.XMLHttpRequest) xhrCo = new XMLHttpRequest()
else xhrCo = new ActiveXObject("Microsoft.XMLHTTP")

xhrCo.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${Colombia}&units=metric&appid=85768672b77e4e3ec805c14dcbdf7fd5`)

xhrCo.addEventListener('load', (data) => {
  const { name, main, weather } = JSON.parse(data.target.response);

  document.getElementById('city-bogota').innerHTML = name;
  document.getElementById('temp-bogota').innerHTML = `${Math.round(main.temp)}<sup>°c</sup>`

  document.getElementById('current-weather-icon').innerHTML = `
    <img class="current-icon-bogota" src="http://openweathermap.org/img/wn/${ weather[0].icon }@2x.png"/>
  `

})

xhrCo.send()