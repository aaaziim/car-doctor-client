import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const BookingRow = ({booking, handleBookingDelete,handleApprove}) => {

   


    return (
        <tr key={booking._id} className="border-t">
        <td onClick={()=> handleBookingDelete(booking._id)} className="px-4 py-3 font-bold text-2xl text-red-500 cursor-pointer">X</td>
       <td className="px-4 py-3 text-gray-700">{booking.title}</td>
      
       <td className="px-4 py-3">
         <img src={booking.img} alt={booking.title} className="w-20 h-20 rounded-md object-cover" />
       </td>
       <td className="px-4 py-3 text-gray-700">${booking.price}</td>
       <td className="px-4 py-3 text-gray-700">{booking.date}</td>
       <td className="px-4 py-3">

        {
            booking.status=='Approved' ? <span   className="px-3 py-1 rounded-full   text-sm font-medium">
            {booking.status }
          </span>:<span  onClick={()=> handleApprove(booking._id)} className="px-3 py-1 rounded-full   text-sm font-medium cursor-pointer">
           {booking.status || "Approve Booking"}
         </span>

        }
         
       </td>
     </tr>
    );
};

export default BookingRow;