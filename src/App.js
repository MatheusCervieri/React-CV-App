import Personaldetails from "./components/Personaldetails";
import Cvready from "./components/Cvready";
import Experience from "./components/Experience";
import { useRef } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //npm i uuid
import Education from "./components/Education";
import StyleSheet from "./style.css";
import { useEffect } from "react"; 



function App() {
  const nameform = useRef();
  const emailform = useRef();
  const cityform = useRef();
  const countryform = useRef();
 
  const [name, setName] = useState("Write your name!");
  const [email, setEmail] = useState("Write your email!");
  const [city, setCity] = useState("Write your city!");
  const [country, setCountry] = useState("Write your Country");

  const [experiencecomponents, setExperiencecomponents] = useState([{id: uuidv4(), name: "42 São Paulo", 
  descripition: "I study at 42 São Paulo the best software engineering school in Brasil",
  startdate: "date",
  enddate: "date" }]);

  const [educationcomponents, setEducationcomponents] = useState([{id: uuidv4(), name: "42 São Paulo", 
  degree: "BSC of Science!",
  startdate: "date",
  enddate: "date" }]);

  function generatecvbutton(){
    setName(nameform.current.value);
    setEmail(emailform.current.value);
    setCity(cityform.current.value);
    setCountry(countryform.current.value);
  }

  const LOCAL_STORAGE_KEY = "cvapp.experiences";
  const LOCAL_STORAGE_KEY2 = "cvapp.educations"; 

  //Load saved data when initialized.  
  useEffect( () => {

    const storedexperiences = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedexperiences) setExperiencecomponents(storedexperiences);
    const educationcomponents = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2));
    if(educationcomponents) setEducationcomponents(educationcomponents);
  }, []);

  //Save the data from de objects. 
  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(experiencecomponents));
  }, [experiencecomponents]);

  useEffect ( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(educationcomponents));
  }, [educationcomponents])

  return (
    <div className="main">
      <div>
        <br></br>
      <Personaldetails nameform={nameform} emailform={emailform} cityform={cityform} countryform={countryform} onchangeform={generatecvbutton}/>
      <br></br>
      <Experience btnfun={setExperiencecomponents} experiencesarray={experiencecomponents}/>
      <br/>
      <Education btnfun={setEducationcomponents} array={educationcomponents} />
      <br></br>
      </div>
      <div>
      <Cvready name={name} email={email} city={city} country={country} experiencesarray={experiencecomponents} setArray={setExperiencecomponents} educationsarray={educationcomponents} setEducationArray={setEducationcomponents}/>
      </div>
    </div>
  );
}

export default App;
