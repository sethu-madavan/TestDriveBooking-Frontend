import axios from 'axios';

const BOOKING_API_URL = "http://localhost:9999/";

class Booking{
    saveBooking(book){
        return axios.post(BOOKING_API_URL + "add", book);
    }
    getBookings(){
        return axios.get(BOOKING_API_URL + "show");
    }
    deleteBooking(id){
        return axios.delete(BOOKING_API_URL + "del/" + id);
    }
    updateBooking(id,book){
        return axios.put(BOOKING_API_URL + "update/"+ id,book);
    }

    getBookingById(id){
        return axios.get(BOOKING_API_URL + "view/" + id);
    }
}

export default new Booking();