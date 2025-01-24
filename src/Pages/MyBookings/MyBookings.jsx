import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);


  const handleApprove = id =>{
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status : "Approved"})
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.modifiedCount>0){
      const remaining = bookings.filter( booking => booking._id !== id);
      const updated = bookings.find(booking=> booking._id === id)
      updated.status = "Approved"
            setBookings([...remaining, updated])
    }
  })
  }


  const handleBookingDelete = id =>{
    const proceed = confirm('Are you sure to delete');
    if(proceed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
          
          if(data.deletedCount>0){
            const remaining = bookings.filter( booking => booking._id !== id)
            setBookings(remaining)
          }
            
        })
    }
}

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-3xl font-bold my-8">My Bookings</h2>
      <div className="overflow-x-auto my-10">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
            <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">Action</th>
            <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">Title</th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">Image</th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">Price</th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">Date</th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
            <BookingRow 
            booking={booking} 
            handleBookingDelete={handleBookingDelete}
            handleApprove={handleApprove}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
