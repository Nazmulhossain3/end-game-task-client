/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Carousel } from 'react-responsive-carousel';
import pic4 from '../../../assets/End-gama/gallery-5.avif'
import pic1 from '../../../assets/End-gama/gallery-7.jpg'
import pic3 from '../../../assets/End-gama/galary-8.jpg'
import pic2 from '../../../assets/End-gama/galary-10.jpg'

const Graduation = () => {
   
    
      return (
    <div className='px-12'>

        <h2 className='text-3xl text-center font-light mb-8 mt-4'> Our college graduate's</h2>

        <div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full   bg-black">
    <img src={pic1} className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
  
  <div id="slide2" className="carousel-item relative w-full">
    <img src={pic2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={pic3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={pic4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
      );
    };


export default Graduation;