import React, { useState, useEffect } from 'react'
import BookingService from './BookingService';
import { useNavigate } from 'react-router-dom';
import "./Home.css"

const Page2 = () => {

    const navigate = useNavigate();

    const [details, setDetails] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await BookingService.getBookings();
                setDetails(response.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    })

    const eventDelete = (id) => {
        // event.preventDefault();
        BookingService.deleteBooking(id).then(() => {
            if (details) {
                setDetails((element) => {
                    return element.filter((booking) => booking.id !== id);
                })
            }
        })
    }

    const eventEdit = (id) => {
        navigate(`/edit/${id}`);
    }

    const eventHome = () => {
        navigate("/Home")
    }

    return (
        <div>
            <div id="table">
            <table border={3} cellPadding={5}>
                <th>
                    booking id
                </th>
                <th>
                    Brand
                </th>
                <th>
                    Model
                </th>
                <th>
                    Time
                </th>
                <th>
                    Date
                </th>
                <th>
                    Actions
                </th>
                {
                    details.map((ele) => {
                        return (
                            <tr key={ele.bookingId}>
                                <td>
                                    {ele.bookingId}
                                </td>
                                <td>
                                    {ele.brand}
                                </td>
                                <td>
                                    {ele.model}
                                </td>
                                <td>
                                    {ele.time}
                                </td>
                                <td>
                                    {ele.date}
                                </td>
                                <button onClick={(e, id) => eventEdit(ele.bookingId)}>EDIT</button>
                                <button onClick={(e, id) => eventDelete(ele.bookingId)}>DELETE</button>
                            </tr>
                        );
                    })
                }
            </table>
            <br></br>
            <button id="gethome"onClick={eventHome}>Home</button>
            </div>
        </div>
    )
}

export default Page2