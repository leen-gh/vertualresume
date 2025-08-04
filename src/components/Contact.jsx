import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {contactInfo} from '../constants/index'
import { toast } from 'react-hot-toast';

const Contact = () => {
  const contactRef = useRef(null);
  const colors = ['#ffffff', '#FBAC30', '#FDD542', '#682D63', '#52dee5'];
  const starsRef = useRef(null)
  


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.contact-item').forEach((item, index) => {
        gsap.from(item, {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1.5,
          delay: index * 0.2,
          ease: 'power3.out',
        });
      });
      const stars = starsRef.current?.children
            if (stars) {
                gsap.to(stars, {
                duration: 5,
                repeat: -1,
                y: 'random(-50, 50)',
                x: 'random(-50, 50)',
                ease: 'sine.inOut',
                stagger: {
                    amount: 0.1,
                    from: 'random',
                },
            })
        }
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contactRef} className='tracking-wide py-20 px-4 min-h-[600px]' id='contact'>
      <div
        ref={starsRef}
        className='absolute inset-0 z-0 flex justify-center items-center overflow-hidden'>
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className='w-1 h-1 rounded-full absolute'
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              opacity: Math.random(),
              
            }}
          ></div>
        ))}
      </div>
      <div className='max-w-6xl mx-auto'>
        <div className='p-8 md:p-10'>
          <h2 className='text-2xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text mb-12 text-center'>
            Get in Touch
          </h2> 
          <p className='my-5 text-md text-center'>
            Have a project in mind or just want to say hello?<br/> I’m always open to new opportunities and collaborations.
          </p>            
        </div>
        <div className='grid lg:grid-cols-3 gap-y-4 sm:grid-cols-1 md:grid-cols-2 lg:h-32 h-96 bg-transparent cursor-pointer perspective justify-items-center '>
          
        {contactInfo.map((feature, index) => (
          <div
            key={index}
            className='relative w-full h-full transform-style preserve-3d transition-transform duration-1000 hover:rotate-y-180 sm:w-1/2 lg:w-2/3'
          >
            <div className='absolute w-full h-full flex items-center justify-center backface-hidden bg-white/5 rounded-md place-content-center items-center'>
              <div className='flex mx-10 h-12 p-2 text-orange-400 justify-center items-center '>
                {feature.icon}
              </div>
            </div>

            <div className='absolute w-full h-full flex items-center justify-center rotate-y-180 backface-hidden bg-white/5 rounded-md text-center'
              onClick={async() => {
                if(feature.onClick)
                await navigator.clipboard.writeText(feature.onClick).then(() => {
                toast.success('Copied to clipboard!')
              })}}
            >
              <h5 className='text-neutral-200 px-2 wrap-break-word leading-7'>{feature.text}</h5>
            </div>
          </div>
        ))}
      </div>

 
      </div>
      </div>
      
  );
};

export default Contact;
