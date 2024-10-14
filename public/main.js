var arr = ["Mumbai", "Chennai", "Delhi", "Lucknow", "Kolkata", "Bangalore", "Chennai", "Assam", "Nagpur"];

const dropdown = document.getElementById('weather');

arr.forEach((city) => {
    dropdown.innerHTML += `<option>${city}</option>`;
});

const btn = document.getElementById('btn');

async function callFetch(city) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=67528674eafe4d19810163326241310&q=${city}&aqi=no`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

btn.addEventListener('click', function(){
    let city = dropdown.value;
    
    if(!arr.includes(city)){
        alert("Select city");
        return;
    }

    console.log(city);
    callFetch(city);
});
