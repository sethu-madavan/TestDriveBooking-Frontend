import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.css";
const Home = () => {

    const navigate = useNavigate();

    const eventNavigate = () => {
        navigate("/form")
    }

    const eventDetails = () => {
      navigate("/GetDetails")
    }

  return (
    <div>
      <div id="HomeContainer" >
          <h1>
              Home Page
          </h1>
          <button onClick={eventNavigate} id="but1">Book a TestDrive</button>
          <button onClick={eventDetails} id="but2">Registrations</button>
        </div>
    </div>
  )
}

export default Home