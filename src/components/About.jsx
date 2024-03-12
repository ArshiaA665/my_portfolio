import React from 'react';
// countup
import CountUp from 'react-countup/build/';
// interaction observer hook
import {useInView} from 'react-intersection-observer'
// motion
import {motion} from 'framer-motion'
// variant
import { fadeIn } from '../variants'
// image

const About = () => {
  const [ref, inView] = useInView ({
    threshold: 0.5,
  })
  return (
    <section className='section ' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row 
        lg:items-center lg:gap-x-20 lg:gap-y-0'>
        {/* img */}
        <motion.div 
        
        variants={fadeIn('right', 0.3)} 
        initial="hidden"
        whileInView={'show'} 
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain
          bg-no-repeat h-[600px] bg-top z-10'>

        </motion.div>
        {/* text */}
        <motion.div 
          variants={fadeIn('up', 0.5)} 
          initial="hidden"
          whileInView={'show'} 
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>Im a Front-end Developer with 3 Years of 
            Experience.
          </h3>
          <p className='mb-6'>
           Feel free to take a look at my projects. I have accomplished 10 projects. Most of them were from 
           the university and companies and thier github is private. I have projects of my own!
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary
                text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={3} duration={7}/>
                  : null
                }
              </div>
              <div className='font-primary text-sm 
                tracking-[2px]'>
                Years of <br/>
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary
                text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={10} duration={9}/>
                  : null
                }
              </div>
              <div className='font-primary text-sm 
                tracking-[2px]'>
                Projects <br/>
                Completed
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href="#" className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default About;
