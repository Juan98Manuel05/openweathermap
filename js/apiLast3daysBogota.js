let xhrNextDays;
const city = 'Bogota,Co';

if(window.XMLHttpRequest) xhrNextDays = new XMLHttpRequest()
else xhrNextDays = new ActiveXObject("Microsoft.XMLHTTP")

xhrNextDays.open('GET', `https://api.openweathermap.org/data/2.5/onecall?lat=4.6097&lon=-74.0817&exclude=current,minutely,hourly,alerts&units=metric&cnt=3&appid=85768672b77e4e3ec805c14dcbdf7fd5`)

xhrNextDays.addEventListener('load', (data) => {
  const { daily } = JSON.parse(data.target.response)

  const ul = document.getElementById('next-days')
  var dias = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  for(let i = 0; i < 3; i++){

    let fecha = new Date(daily[i].dt * 1000)
    let li = document.createElement('div')
    let nextDay = new Date( fecha )

    nextDay.setDate(fecha.getDate()+1)
    
    li.setAttribute('class','wrapper-day')

    li.innerHTML = `
        <div class="wrapper-icon-next-day">
          <img src="http://openweathermap.org/img/wn/${ daily[i].weather[0].icon }@2x.png" />
        </div>
        <div class="wrapper-info-next-day">
          <p> <b> ${dias[nextDay.getDay()] } </b> </p>
          <p> ${daily[i].weather[0].main} </p>
        </div>
        <div class="temp-next-day">
          <p> ${Math.floor(daily[i].temp.day)}<sup>°C</sup></p>
        </div>
    `
    // li.appendChild(document.createTextNode( `${dias[nextDay.getDay()]} ${daily[i].weather[0].main}`))
    ul.appendChild(li)
  }

})

xhrNextDays.send()