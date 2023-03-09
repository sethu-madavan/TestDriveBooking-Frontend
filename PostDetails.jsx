import { React, useState } from 'react';
import Booking from './BookingService';
import "./page1.css"
import { useNavigate } from 'react-router-dom';
import "./Home"
import "./Home.css"



function Form() {
    const [details, setDetails] = useState("");
    const navigate = useNavigate();
    const eventHandler = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value });
    };
    const eventShow = () => {

        Booking.saveBooking(details).then(response => console.log(response)).catch(error => console.log(error));
        console.log(details)
        navigate("/GetDetails")

    };
    
    const eventCancel = () => {
        navigate("/Home")
    };

    return (
        <div id="PageCon">
            <h1 id="PostH">
                TestDriveBooking
            </h1>
            <div id="enfil">
                <div>
                    <input id="field" placeholder='BookingId' name="bookingId" type="number" required onChange={eventHandler} /><br></br>
                    <input id="field" placeholder='Brand' name="brand" type="text" required onChange={eventHandler} /><br></br>
                    <input id="field" placeholder='model' name="model" type="text" required onChange={eventHandler} /><br></br>
                    <input id="field" placeholder='time' name="time" type="time" required onChange={eventHandler} /><br></br>
                    <input id="field" placeholder='date' name="date" type="date" required onChange={eventHandler} /><br></br>
                    <input id="field" type={'submit'} onClick={eventShow}/>
                    <button id="butc" onClick={eventCancel}>Cancel Booking</button>
                </div>
            </div>
            {/* <button >Book</button> */}
            <br></br>
        </div>
    )
}

export default Form;