"use client";
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-blue-110 dark:bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-secondary dark:text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-secondary dark:text-white  tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary dark:text-white text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-tertiary dark:bg-black-100 rounded-[20px]`}>
      <div
        className={` dark:bg-tertiarydark rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      
      <Swiper className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}
      loop={true}
      spaceBetween={130}
      pagination={{
        clickable:true,
      }}
      breakpoints={{
        // For small screens
        576: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        // For medium screens
        768: {
          slidesPerView: 1,
          spaceBetween: 65,
        },
        // For larger screens
        1024: {
          slidesPerView: 2,
          spaceBetween: 64,
        },
        // For extra-large screens
        1440: {
          slidesPerView: 3,
          spaceBetween: 75,
        },
      }}
      modules={[Pagination]}
      >
        {testimonials.map((testimonial, index) => (
           <SwiperSlide key={index}> <FeedbackCard key={testimonial.name} index={index} {...testimonial} /> </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");