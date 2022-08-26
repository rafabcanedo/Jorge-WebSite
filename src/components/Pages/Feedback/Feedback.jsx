import React from 'react';
import "./Feedback.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

// import Images
import img1 from '../../../assets/images/feedback1.jpeg';
import img2 from '../../../assets/images/feedback2.jpeg';
import img3 from '../../../assets/images/feedback3.jpeg';
import img4 from '../../../assets/images/feedback4.jpeg';
import img5 from '../../../assets/images/feedback5.jpeg';
import img6 from '../../../assets/images/feedback6.jpeg';

const Feedback = () => {
 return(
  <div className='feedback-main'>
   <div className='feedback-container'>
   <div className='feedback-title'>
   <h1>FEEDBACKS</h1>
   </div>
  
   <div className='slide-container'>
   <div className='slide-content'>
   <div className='card-wraper'>
    <div className='card'>
     <div className='image-content'>
      <span className='overlay'></span>

      <div className='card-image'>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide> <img src={img1} alt="feedback1" className='card-img' /> </SwiperSlide>
      <SwiperSlide> <img src={img2} alt="feedback2" className='card-img' /> </SwiperSlide>
      <SwiperSlide> <img src={img3} alt="feedback3" className='card-img' /> </SwiperSlide>
      <SwiperSlide> <img src={img4} alt="feedback4" className='card-img' /> </SwiperSlide>
      <SwiperSlide> <img src={img5} alt="feedback5" className='card-img' /> </SwiperSlide>
      <SwiperSlide> <img src={img6} alt="feedback6" className='card-img' /> </SwiperSlide>
       </Swiper>
      </div>
     </div>
    </div>
   </div>
   </div>
   </div>
  </div>
  </div>
 );
}

export default Feedback;

/*
<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
*/