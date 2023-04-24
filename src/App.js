import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
function App() {

const apikey = "4ef34b7a580bfc5b0df3b7f9460edf70"
const [inputCity,setInputCity] = useState("")
const[data,setData] = useState({})
const getWetherDetails = (cityName) =>{
  if(!cityName) return
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName+ "&appid="+apikey
  axios.get(apiURL).then((res)=>{
    console.log("response", res.data)
    setData(res.data)
  }).catch((err)=>{
    console.log("err",err)
  })
}
const handleChangeInput = (e) =>{
  console.log("value", e.target.value)
  setInputCity(e.target.value)
}
const handleSearch = () =>{
  getWetherDetails(inputCity)
}
useEffect(()=>{
getWetherDetails("delhi")
},[])


  return (
    <div className="col-md-12">
      <div className="wetherbg">
        <div className="borderRed">
        <h1 className="heading">Wether App</h1>
        </div>
        <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control" value={inputCity} onChange = {handleChangeInput} />
        <button className="btn btn-primary" type="button" 
        onClick= {handleSearch} >Search</button>
        </div>
        </div>

        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded wetherResultBox">
            <img className="wethericon" src="https://cdn.pixabay.com/photo/2012/04/18/13/23/cloudy-37012_960_720.png"/>
          <h5 className="wethercity">
            {data?.name}
          </h5>
          <h6 className="wethertemp">{((data?.main?.temp)-273.15).toFixed(2)}</h6>
          </div>

        </div>
    </div>
  );
}

export default App;
