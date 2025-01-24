import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Checkout = () => {
    const { id } = useParams(); 
      const { user } = useContext(AuthContext);
    
    const [service, setService] = useState(null); // Initialize as null

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, [id]);






    const handleServiceBooking = (e) =>{

        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;
        const img = service.img;

        fetch("http://localhost:5000/bookings/", {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({title,img, email, date, price})
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Failed to book the service.");
            }
        })
        .then((data) => {
            console.log("Service booked successfully:", data);
            alert("Service booked successfully!");
            form.reset(); // Optional: Reset the form fields
        })
        .catch((err) => {
            console.error(err);
            alert("An error occurred while booking the service.");
        });

    }

    if (!service) {
        // Display a loading state while data is being fetched
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2 className="text-4xl font-bold p-3">Checkout</h2>
            <form onSubmit={handleServiceBooking} className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
                <input 
                    type="text" 
                    placeholder="title" 
                    className="p-2 rounded-xl" 
                    defaultValue={service.title || ''} name='title' // Provide a fallback to avoid errors
                />
                <input type="text" placeholder="Email" className="p-2 rounded-xl" name='email' defaultValue={user.email} />
                <input type="date" className="p-2 rounded-xl" name='date' />
                <input type="text" placeholder='Price' defaultValue={service.price} className="p-2 rounded-xl" name='price' />
                <input type="submit" value="Order" className="col-span-2 btn" />
            </form>
        </div>
    );
};

export default Checkout;
