//Link
import { Link } from 'react-scroll';
//React
import React from 'react';
//motion
import {motion} from 'framer-motion'
// variant
import { fadeIn } from '../variants'
// image
import Logo from '../assets/logo.svg'

import Particles from  'react-particles';
import {loadFull} from 'tsparticles'
import  { useCallback } from 'react'

const Header = () => {

  const particlesInit =useCallback(async (engine) =>{
    await loadFull(engine)

  }, []);

  const particlesLoaded = useCallback(async (container) =>{
    await console.log(container)
  }, [])

  return (
  <header className='py-8'>
    
    <div className='container mx-auto'>
      <motion.div 
      variants={fadeIn('bottom', 0.3)} 
      initial="hidden"
      whileInView={'show'}
      className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        {/* button */}

        <Link
         to='work'
         activeClass='active'
         smooth={true} 
         spy={true}>
        <button className='btn btn-sm'>See My Work</button> 
        </Link>
      </motion.div>
    </div>
  </header>
  );
};

export default Header;
