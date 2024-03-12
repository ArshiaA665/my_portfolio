import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.3)} 
      initial="hidden"
      whileInView={'show'} 
      viewport={{once: false, amount: 0.3}}
      className='section' 
      id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 m-auto'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My Latest <br />
              Work
            </h2>
            <p className="max-w-sm mb-16">
              I made a few personal projects. Feel free to take a look
              at them!
            </p>
            <a href="#"><button className='btn btn-sm'>My Portfolio</button></a>
          </div>
          {/* image1 */}
          <a href="https://travela.online/" target="_blank" rel="noopener noreferrer"> 
            <div className='group relative overflow-hidden cursor-pointer
                border-2 border-white/65 rounded-xl h-[300px]'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full
              absolute z-40 transition-all duration-300'>
            </div>
            {/* img */}
              <img 
                className='group-hover:scale-125 transition-all duration-500 object-cover w-full h-full'
                src={img1} 
                alt="img1"/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
                group-hover:bottom-24 transition-all duration-500
                z-50'>
              <span className='text-gradient'>UI/UX Design</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
                group-hover:bottom-14 transition-all duration-700
                z-50'>
              <span className='text-3xl text-white'>Travela</span>
            </div>
          </div>
          </a>
        </div>
        <div className='flex-1 flex flex-col gap-y-10 xl:pt-20 lg:pt-20'>
          {/* image2 */}
          <a href="https://www.weathernews.tech/" target="_blank" rel="noopener noreferrer"><div className='group relative overflow-hidden 
                border-2 border-white/65 rounded-xl h-[300px]'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full
              absolute z-40 transition-all duration-300'>
            </div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500 object-cover w-full h-full' 
            src={img2} alt="img1"/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12
                group-hover:bottom-24 transition-all duration-500
                z-50'>
              <span className='text-gradient'>UI/UX Design</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12
                group-hover:bottom-14 transition-all duration-700
                z-50'>
              <span className='text-3xl text-white'>Weather News</span>
            </div>
          </div>
          </a>
          {/* image3 */}
          <div className='group relative overflow-hidden 
                border-2 border-white/65 rounded-xl h-[300px]'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full
              absolute z-40 transition-all duration-300'>
            </div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500 object-cover w-full h-full' 
            src={img3} alt="img1"/>
          </div>
        </div>
      </div>
    </div>
   </motion.section>
    
  );
};

export default Work;
