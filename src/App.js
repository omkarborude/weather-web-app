import React,{useState} from 'react';
import './App.css';



function App() {



  //define API
var URL = "http://api.openweathermap.org/data/2.5/weather?q=";
var key = "7ca996688e35662b1ca3d68de68242fb";

//define function cunstructURL
function constructUrl(city) {
    return URL + city + "&units=metric&appid=" + key;
}

//get City Name input
  const [getcityname,setgetcityname] = useState("");

  const [cityname,setcityname] = useState("");

  const [showdes,setshowdes] = useState("");

  const [showtemp,setshowtemp] = useState();




  function getin(City){
     var cityinput = City.target.value;
    setgetcityname(cityinput);

  };

  // fetch URL here
  function clickhandler(){
  

    fetch(constructUrl(getcityname))
    .then(res => res.json())
    .then(data => {
      var shout = data.main.temp;
      setshowtemp(shout);

      var shdesc = data.weather[0].description;
      setshowdes(shdesc);

      var shname = data.name;
      setcityname(shname);
    })


    

  }

  return (
    <div className="main">

    
      <div className="nav">
      </div>
      <h1>Weather Finder</h1>

      

      <input type="text" placeholder="Enter Your City Name !!" className="cityinput" onChange={getin}></input>

      
     

      <button id="BTN" onClick={clickhandler}> Click </button>

      

      <div id="showoutput">

        

      <h3>{cityname}</h3>

       <h4>{showdes}</h4>

        <h4>{showtemp}</h4>
        
      </div>
    
      
    
    </div>
  );
}

export default App;
