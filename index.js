let author = document.getElementById("author")
let desc = document.getElementById("desc")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(res => res.json())
.then(data =>{
  
  document.body.style.backgroundImage = `url(${data.urls.regular})`
  author.innerHTML = ` By : ${data.user.name}`
 // desc.innerHTML = `${data.description}`
})
.catch(err => {

 document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
})


// CRYPTO SECTION // 
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        console.log(res.status)
        return res.json()
    })
    .then(data => {
      let crypto = document.getElementById("crypto-top") 
      crypto.innerHTML =  ` 
      <img src=${data.image.small} />
      <span>${data.name}</span>
      
      ` 
      let cryptoInfo = document.getElementById("crypto-info")
      cryptoInfo.innerHTML = `
      <p> 💰 ${data.market_data.current_price.usd} $ </p>
      <p> 👆 ${data.market_data.high_24h.usd} $ </p>
      <p> 👇 ${data.market_data.low_24h.usd} $ </p>
      
      `
    })
    .catch(err =>{  
     cryptoInfo.innerHTML = `
  <p> 💰 Oups we don't have the data 😰  </p>
  <p> 👆 It's high don't worry 😅 </p>
  <p> 👇 No idea 🙃 </p>
  
  `} 
)


// date //
   
let currentDate = document.getElementById("date")

const today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
currentDate.innerHTML = date

// time



function getCurrentTime() {
  const date = new Date()
  document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "medium"})
}

setInterval(getCurrentTime, 1000)

// WEATHER //



    navigator.geolocation.getCurrentPosition(position => {
      fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
      .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
      .then( data => {
      
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
              <p class="weather-temp">${Math.round(data.main.temp)}º</p>
              <p class="weather-city">${data.name}</p>
            `

      })
      .catch(err =>   
        document.getElementById("weather").innerHTML = `
      <p>🌞</p>
    <p class="weather-temp">100º</p>
    <p class="weather-city">Sun City</p>
  `)
   
    });



 