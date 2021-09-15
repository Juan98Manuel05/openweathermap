let xhrFr;
const French = 'Paris,FR';

if(window.XMLHttpRequest) xhrFr = new XMLHttpRequest()
else xhrFr = new ActiveXObject("Microsoft.XMLHTTP")

xhrFr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${French}&units=metric&appid=85768672b77e4e3ec805c14dcbdf7fd5`)

xhrFr.addEventListener('load', (data) => {
  const { name, main, weather } = JSON.parse(data.target.response)

  console.log(weather[0].icon)
  document.getElementById('city-paris').innerHTML = name
  document.getElementById('temp-paris').innerHTML = `${Math.round(main.temp)}<sup>°c</sup>`

  document.getElementById('icon-clouthy-paris').innerHTML = `
    <img class="current-icon-paris" src="http://openweathermap.org/img/wn/${ weather[0].icon }@2x.png"/>
  `
})

xhrFr.send()