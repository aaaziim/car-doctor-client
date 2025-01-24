import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
return (
<div key={service._id} className="card bg-base-100 space-y-2 shadow-sm">
<figure className='rounded-xl'>
<img
src={service.img}
alt="Shoes" />
</figure>
<div className="card-body">
<h2 className="text-3xl font-semibold text-center">{service.title}</h2>
<div className=" ">
<p className="text-orange-500 text-xl font-semibold">Price : $ {service.price}</p>
<Link to={`/checkout/${service._id}`}> 
<button className="btn btn-primary my-2">Book Now</button>


</Link>
</div>
</div>
</div>
);
};

export default ServiceCard;