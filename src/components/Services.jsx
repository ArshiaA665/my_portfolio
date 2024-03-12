//link
import { Link } from 'react-scroll';
//react
import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'UI/UX Design',
    description: '2 years of experience with UI/UX. I use Figma for my design.',
    link: 'https://bootcamp.cvn.columbia.edu/blog/what-is-ux-design/',
    learn: 'Learn More',
  },
  {
    name: 'Front-end',
    description: '3 years of experience with HTML and CSS. I have recently learned TailwindCSS which saved me alot of time!',
    link: 'https://roadmap.sh/frontend#:~:text=Front%2Dend%20development%20is%20the,the%20dynamic%20behaviour%20and%20interactivity.',
    learn: 'Learn More',
  },
  {
    name: 'Back-end',
    description: '1 year of experience with Python but I am more into JavaScript with 3 years of experience',
    link: 'https://careerfoundry.com/en/blog/web-development/whats-the-difference-between-frontend-and-backend/',
    learn: 'Learn More',
  },
  {
    name: 'Networking',
    description: 'I have some Networking Knowledge with CI/CD, AWS, and Windows Administration including Hyper-V',
    link: 'https://www.ibm.com/topics/networking',
    learn: 'Learn More',
  },
  
]

const Services = () => {
  return (
    <section className='section lg:pb-10 pb-0' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services
            lg:bg-bottom bg-no-repeat mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'> What I Do</h2>
            <h3 className='h3 max-w-[460px] mb-16'>
              Im a Front-end Developer with 3 Years of 
              Experience.
            </h3>
            <Link
             to='work'
             activeClass='active'
             smooth={true} 
             spy={true}>
            <button className='btn btn-sm'>See My Work</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }} 
          className='flex-1'>
          {/* service list */}
          <div>
            {services.map((service, index) => {
            const {name, description, link, learn} = service
            
            return(
              <div 
                className='border-b border-white/35
                  h-[146px] mb-[38px] flex' 
                key={index}>
                <div className='max-w-[476px]'> 
                  <h4 className='text-[20px] tracking-wider
                    font-primary font-semibold mb-6'>
                    {name}
                  </h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>

                <div 
                className='flex flex-col flex-1 items-end'>
                  <a 
                  href={link} 
                  target="_blank" rel="noopener noreferrer"
                  className='btn w-9 h-9 mb-[42px]
                    flex items-center justify-center'>
                    <BsArrowUpRight />
                  </a>
                  <a 
                  href={link} 
                  target="_blank" rel="noopener noreferrer"
                  className='text-gradient text-sm'>
                    {learn}
                  </a>
                </div>
              </div> 
              );
            })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
