import { response } from "express";

/* Global Variables */
let baseURL = "http://samples.openweathermap.org/data/2.5/weather?zip=";
let apiKey ='&appid=eca4bc9e5acf884b135567fecdc57529'; 
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Fetch the value entered in the browser and async GET request to weatherapi 
document.getElementById('generate').addEventListener('click',performAction);

function performAction(e){
  const zip = document.getElementById('zip').value;
  const userResponse = document.getElementById('feelings').value;
  getWeatherUpdate(baseURL,zip,apiKey)
  .then(function(data){
    console.log(data)
    postData('/add',{temperature:data.main['temp'],date:newDate,userResponse:userResponse})
  })
  .then(
    updateUI()
  )
};

// Get route
const getWeatherUpdate = async (baseURL,zip,apiKey)=>{
  const response = await fetch(baseURL+zip+apiKey);
  try{
    data = await response.json()
    console.log(data);
    return data;
  }catch(error){
    console.log(error)
  }
}

// POST route
const postData = async ( url = '', data = {})=>{
    //console.log(data);
    const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
           },
      // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
  }

// UI update method
const updateUI = async()=>{
  const request = await fetch('/all');
  try{
    const allData = request.json();
    document.getElementById('temp').innerHTML = allData.temperature
    document.getElementById('content').innerHTML = allData.userResponse
    document.getElementById('date').innerHTML = allData['date']
  }catch(error){
    console.log("error", error);
  }
}
  
// postData('/animal', {animal:'Dog'});
// postData('/add',{temperature:97.4,date:newDate,feelings:feelings})