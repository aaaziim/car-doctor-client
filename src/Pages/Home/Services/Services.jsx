import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services , setServices] =  useState([]);


    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    return (
        <div className='my-10'>
            <div>
                <h3 className="text-4xl font-bold text-orange-500 ">Our Services</h3>
                <p className="py-6">
       Next Level Car Servicing
      </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
{
                    services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)

}            </div>











        </div>
    );
};

export default Services;