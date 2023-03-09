import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BookingService from './BookingService';

const Edit = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const initialState = {
        bookingId: id,
        brand: "",
        date: "",
        model: "",
        time: ""
    }

    const [details, setDetails] = useState(initialState);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await BookingService.getBookingById(id);
                setDetails(response.data);
                console.log(details);
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    const eventUpdate = () => {
        BookingService.updateBooking(id, details);
        console.log(details);
        navigate("/GetDetails");
    }

    const eventHandler = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value })
    }

    const eventCancel = () => {
        navigate("/Home");
    }
    return (
        <div>
            <input value={details.brand} onChange={eventHandler} name="brand" />
            <input value={details.date} onChange={eventHandler} name="date" />
            <input value={details.model} onChange={eventHandler} name="model" />
            <input value={details.time} onChange={eventHandler} name="time" />

            <button onClick={eventUpdate}>UPDATE</button>
            <button onClick={eventCancel}>CANCEL</button>
        </div>
    )
}

export default Edit