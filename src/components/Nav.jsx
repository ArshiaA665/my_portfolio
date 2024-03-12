import React from 'react';
// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase } from 'react-icons/bs';
//import link
import { Link } from 'react-scroll'

const Nav = () => {
  window.onload = function() {
    window.setTimeout(
        function() {
            window.scrollTo(0,0);
            document.body.style.display = "inherit";
        },
        0
    );
};
  /* This should scroll the page to the top before the page refreshes */
  window.onbeforeunload = function() { window.scrollTo(0,0); }
  return(
   <nav className='fixed bottom-2 lg:bottom-8
    w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      {/* nav inner */}
    <div className="w-full bg-black/20 h-[96px]
      backdrop-blur-2xl rounded-full max-w-[460px]
      mx-auto px-5 flex justify-between items-center text-2xl
      text-white/50">

      <Link 
        to='home'
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='cursor-pointer w-[60px] 
        h-[60px] flex items-center justify-center'>
      <BiHomeAlt />
      </Link>

      <Link 
        to='about'
        activeClass='active'
        smooth={true}
        spy={true} 
        className='cursor-pointer w-[60px] 
        h-[60px] flex items-center justify-center'>
      <BiUser />
      </Link>
      
      <Link 
        to='services'
        activeClass='active'
        smooth={true} 
        spy={true}
        className='cursor-pointer w-[60px] 
        h-[60px] flex items-center justify-center'>
      <BsClipboardData />
      </Link>
      
      <Link 
        to='work'
        activeClass='active'
        smooth={true} 
        spy={true}
        className='cursor-pointer w-[60px] 
        h-[60px] flex items-center justify-center'>
      <BsBriefcase/>
      </Link>
    </div>
    </div>
  </nav>
  );
};

export default Nav;
 