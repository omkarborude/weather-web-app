import React,{useState} from 'react';
import './App.css';





function App() {


var showicon;
  //define API
var URL = "http://api.openweathermap.org/data/2.5/weather?q=";
var key = "7ca996688e35662b1ca3d68de68242fb";

//define function cunstructURL
function constructUrl(city) {
    return URL + city + "&units=metric&appid=" + key;
}

//get City Name input & output save
  const [getcityname,setgetcityname] = useState("");

  const [cityname,setcityname] = useState("");

  const [showdes,setshowdes] = useState("");

  const [showtemp,setshowtemp] = useState();

  const [condition,setcondition] = useState();

  const [icon,seticon] = useState();








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

      var getcondition = data.weather[0].id;
      setcondition(getcondition);

      if (condition < 300) {
       var showicon = "https://img.icons8.com/color/48/000000/intense-rain--v2.png";
        seticon(showicon);
        
    } else if (condition < 505) {
      showicon = "https://img.icons8.com/color/48/000000/intense-rain--v2.png";
      seticon(showicon);
  
    } else if (condition === 515) {
      showicon = "https://img.icons8.com/color/48/000000/intense-rain--v2.png";
      seticon(showicon);
      
    } else if (condition < 600) {
      showicon = "https://img.icons8.com/color/48/000000/intense-rain--v2.png";
      seticon(showicon); 
  
    } else if (condition < 700) {
      showicon = "https://img.icons8.com/color/48/000000/intense-rain--v2.png";
        seticon(showicon);
  
    } else if (condition <= 800) {
      showicon = "https://img.icons8.com/color/48/000000/intense-rain--v2.png";
      seticon(showicon); 
  
    } else if (condition === 800) {
      showicon = "https://img.icons8.com/color/48/000000/intense-rain--v2.png";
        seticon(showicon);
    
    } else {
      console.log("fowjf");
      };


    });

  

    


}

  return (

    // main div
    <div className="main">
 
      {/* //nav head */}
      <div className="nav">
      </div> 
      <h1><span  className="hheadh">Weather </span>
       <span className="bgani"> Finder</span></h1>
 
      <div className="getingin">
      {/* city input */}
      <input type="text" placeholder="Enter Your City Name !!" className="cityinput" onChange={getin}></input>

      {/* Click Button */}
      <button id="BTN" onClick={clickhandler}>Check  <i class="fas fa-share"></i>
      </button>

      </div>
   

      {/* ouput area */}
      <div id="showoutput">

       {/* show output data here */}

       <div className="citystyle">
       <h3>{cityname}</h3>
       <img>{icon}</img>
       </div>

        <h4>{showdes}</h4>
        

         <h4>{showtemp}</h4>
         <img>{icon}</img>

         

         
         
        
      </div>
    
      
    
    </div>
  );
}

export default App;
