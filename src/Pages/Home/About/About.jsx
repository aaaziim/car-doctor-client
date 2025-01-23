import React from 'react';
import img1 from "../../../assets/images/about_us/person.jpg"
import img2 from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero my-10 ">
  <div className="hero-content flex-col space-y-10 lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img
      src={img1} className='w-3/4 rounded-xl shadow-2xl' />
      <img
      src={img2} className='w-1/2 rounded-xl shadow-2xl border-4 border-white  absolute right-5 -bottom-12' />
    </div>
    <div className='lg:w-1/2'>
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="py-6">
       Next Level Car Servicing
      </p>
      <button className="btn btn-primary btn-outline">More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;