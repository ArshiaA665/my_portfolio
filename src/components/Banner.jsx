import React from 'react';
// images
import Image from '../assets/avatar.svg'
// icons
import { FaGithub, FaDribbble, FaLinkedin, FaDiscord } from 'react-icons/fa'
// type animation
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'


function Banner() {
  return ( 
  <div className='Banner min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row
      lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary
          lg:text-left'>
          <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial="hidden"
            whileInView={'show'} 
            viewport={{ once: false, amount:0.7 }} 
            className='text-[55px] font-bold leading-[1]
              lg:text-[70px]'>
            ARSHIA <span>ARYANFAR</span>
          </motion.h1>
          <motion.div 
            variants={fadeIn('up', 0.3)} 
            initial="hidden"
            whileInView={'show'} 
            viewport={{ once: false, amount:0.7 }}  
            className='mb-6 text-[36px] lg:text-[40px]
            font-secondary font-semibold uppercase leading-[1]'>
            <span className=' text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>
          <motion.p 
            variants={fadeIn('right', 1.0)} 
            initial="hidden"
            whileInView={'show'} 
            viewport={{ once: false, amount:0.7 }}  
            className='mb-8 mx-w-lg mx-auto lg:mx-0'> My name is Arshia. I am a BCIT computer graduate. My main passion is frontend development.
             </motion.p>
             {/* social */}
             <motion.div
             variants={fadeIn('up', 1.5)} 
             initial="hidden"
             whileInView={'show'} 
             viewport={{ once: false, amount:1.0 }}  
             className='flex text-[20px] gap-x-6 max-w-max
              mx-auto lg:mx-0 lg:my-10 '>
              <a href="https://github.com/ArshiaA665/my_portfolio.git" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/arshia-aryanfar-8427141a5/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
             </motion.div>
        </div>
        {/* image */}
        <motion.div 
        variants={fadeIn('left', 0.3)} 
        initial="hidden"
        whileInView={'show'} 
        className='hidden lg:flex flex-1 max-w-[320px]
          lg:max-w-[400px]'>
          <img src={Image} alt="image" />
        </motion.div>
      </div>
    </div>
    
  </div>
  );
}
export default Banner;
