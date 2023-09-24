function search(){
    city=searchCity.value
    console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b41ec3be35c7dac8aabbc21ba253137a`)
    .then(data => data.json())
    .then(outData => {
        console.log(outData);
        displayData(outData);
    })
    .catch(err => {
        alert('Unable to fetch data');
    });
    



}

// access current location
function accessLoc(){
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;
     
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
    .then(place=>place.json())
    .then(output=>{
        console.log(output);
        search(output) 
    })
    .catch(err => {
        alert('Unable to fetch data');
    });
    
}



// display data
function displayData(data){
    temp=parseInt(data.main.temp-273.15)
    console.log(temp);
    maxTem=parseInt(data.main.temp_max-273.15)
    minTem=parseInt(data.main.temp_min-273.15)
    wind=parseInt(data.wind.speed)
    hum=parseInt(data.main.humidity)




    temp1.innerHTML=
    // temprature
    `<h1 class="head1 mt-5">${temp}&#8451;</h1>
    <h1> <i class="fa-solid fa-cloud-sun-rain i1" style="color: #ffffff; font-size:145px;"></i></h1>`

    // location
    capitalizecity=city.toUpperCase()
    loc.innerHTML=`<h2 class="pt-1 head2 pb-3">${capitalizecity}</h2>`

    // max-temp
    maxTemp.innerHTML=
    ` <p><i class="fa-solid fa-temperature-high" style="color: #ffffff;"></i><br>    
    Temp-Max <b> ${maxTem}&#8451;</b>
    </p>
    <hr>
    <p><i class="fa-solid fa-temperature-low" style="color: #ffffff;"></i><br>
    Temp-Min <b> ${minTem}&#8451;</b>
    </p>
    <hr>
    <p><i class="fa-solid fa-wind" style="color: #ffffff;"></i><br>
       Wind speed <b>${wind} m/h</b>
   </p>
   <hr>
   <p><i class="fa-solid fa-water" style="color: #ffffff;"></i><br>
       Humidity <b> ${hum}%</b>
   </p>`


}


