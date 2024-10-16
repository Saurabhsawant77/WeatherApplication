var arr = ["Mumbai", "Chennai", "Delhi", "Lucknow", "Kolkata", "Bangalore", "Chennai", "Assam", "Nagpur","Chandigrah","Noida","Vadodara","Bhopal","Indore","Kanpur","Visakhapatnam","Pune","Jaipur"];
const dropdown = document.getElementById('weather');
arr.forEach((city) => {
    dropdown.innerHTML += `<option>${city}</option>`;
});
const btn = document.getElementById('btn');


let dataContainer = document.getElementById('data-container');
async function callFetch(city) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=67528674eafe4d19810163326241310&q=${city}&aqi=no`);
        const data = await response.json();
        console.log("Above If",data)
        if(!data.error){
        const icon = data.current.condition.icon;
        const condition = data.current.condition.text;
        const temp = data.current.temp_c;
        const wind = data.current.wind_kph;
        const humidity = data.current.humidity;
        
        const cityName = data.location.name;
        const region = data.location.region;
        const country = data.location.country;


        dataContainer.innerHTML = `
        <div class="temperature-condition rounded h-fit items-center justify-evenly flex p-1">
            <div class="img h-fit w-fit m-4 rounded-lg flex flex-col items-center">
                <img src="${icon}" width="150" height="150" alt="">
                <p class="condition text-2xl text-black">${condition}</p>
            </div>
            <div class="temp img h-fit w-fit m-4 p-2  text-black rounded-lg">
                <p class="p-2 text-2xl"> ${temp} °C</p>
                Temperature
            </div>
        </div>
        <div class="city-region-country rounded-lg text-black m-5 bg-white p-4 flex justify-evenly shadow-lg">
            <p class="city text-xl">City : ${cityName}</p>
            <p class="region text-xl">Region : ${region}</p>
            <p class="country text-xl">Country : ${country}</p>
        </div>
        <div class="humidity-wind bg-blue-950 text-white flex justify-evenly p-2 rounded-lg">
            <p class="humidity"><i class='bx bx-water bx-tada text-xl p-3' ></i> Humidity: ${humidity}</p>
            <p class="wind text-white"> <i class='bx bx-wind bx-tada text-xl p-3' ></i> Wind Speed: ${wind} KPH</p>
        </div>
        `;
        }
        else{
        console.log("In Else")
        dataContainer.innerHTML = "";
        dataContainer.innerHTML = `<p class="error text-2xl bg-red-500 p-4 m-4">Try After Some Time</p>`;
        }
        
        
    } catch (error) {
        dataContainer.innerHTML = "";
        dataContainer.innerHTML = "<h2> Try after some</h2>"
        console.error(error);
        
    }
}

btn.addEventListener('click', function() {
    const city = dropdown.value;

    if (!arr.includes(city)) {
        alert("Select city");
        return;
    }

    callFetch(city);
});
