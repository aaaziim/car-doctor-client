import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div key={service._id} className="card bg-base-100 space-y-2 shadow-sm">
                        <figure className='rounded-xl'>
                          <img
                            src={service.img}
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{service.title}</h2>
                          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                          <div className=" items-center">
                            <p className="text-orange-500 text-xl font-semibold">Price : $ {service.price}</p>
                            <button className="btn btn-primary my-2">Buy Now</button>
                          </div>
                        </div>
                      </div>
    );
};

export default ServiceCard;