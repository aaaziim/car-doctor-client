import React from 'react';
import img1 from "../../assets/images/homeCarousel/1.jpg"
import img2 from "../../assets/images/homeCarousel/2.jpg"
import img3 from "../../assets/images/homeCarousel/3.jpg"
import img4 from "../../assets/images/homeCarousel/4.jpg"

const HeroSlider = () => {
    return (
        <div className="carousel w-full rounded-xl my-4">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src={img1}
            class="w-full" />
            
            <div className="absolute h-full top-0 left-0 flex items-center px-4  
             gap-5 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div className='text-white text-left'>
      <h1 className="text-5xl font-bold">Affordable Price</h1>
      <p className="py-6">
        Best Place For Your Car Servicing
      </p>
      <button className="btn btn-danger btn-outline">Discover Nore</button>
    </div>
          </div>
          
          <div className="absolute flex left-5 right-5 bottom-1 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
           src={img2}
            class="w-full" />
              <div className="absolute h-full top-0 left-0 flex items-center px-4  
             gap-5 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div className='text-white text-left'>
      <h1 className="text-5xl font-bold">Affordable Price</h1>
      <p className="py-6">
        Best Place For Your Car Servicing
      </p>
      <button className="btn btn-danger btn-outline">Discover Nore</button>
    </div>
          </div>
          <div className="absolute left-5 right-5 bottom-1 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide1" className="btn btn-circle ">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            class="w-full" />
              <div className="absolute h-full top-0 left-0 flex items-center px-4  
             gap-5 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div className='text-white text-left'>
      <h1 className="text-5xl font-bold">Affordable Price</h1>
      <p className="py-6">
        Best Place For Your Car Servicing
      </p>
      <button className="btn btn-danger btn-outline">Discover Nore</button>
    </div>
          </div>
          <div className="absolute left-5 right-5 bottom-1 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4} />
              <div className="absolute h-full top-0 left-0 flex items-center px-4  
             gap-5 bg-linear-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div className='text-white text-left'>
      <h1 className="text-5xl font-bold">Affordable Price</h1>
      <p className="py-6">
        Best Place For Your Car Servicing
      </p>
      <button className="btn btn-danger btn-outline">Discover Nore</button>
    </div>
          </div>
          <div className="absolute left-5 right-5 bottom-1 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default HeroSlider;