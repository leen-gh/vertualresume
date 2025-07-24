import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import SplitType from 'split-type';


const HeroSection = ({ onSelect }) => {

    const textRef = useRef(null)
    const starsRef = useRef(null)
    useEffect(() => {
        const ctx = gsap.context(() => {

           
            const text = new SplitType(textRef.current);
                gsap.from(text.chars, {
                    opacity: 0,
                    y: 50,
                    stagger: 0.05,
                    duration: 1,
                    ease: 'power4.out',
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
    })
    return () => ctx.revert()
  }, [])

  const colors = ['#ffffff', '#FBAC30', '#FDD542', '#682D63', '#52dee5'];
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20 relative overflow-hidden'>
        <div
        ref={starsRef}
        className='absolute inset-0 z-0 flex justify-center items-center'>
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
      <div className='relative z-10 text-center px-4 h-screen pt-40 sm:pt-30'>
            <p className='text-sm sm:text-xs lg:text-base pb-10'>
                Hello I'm Lin
            </p>
            <h1 className='text-2xl sm:text-4xl lg:text-6xl text-center tracking-wide'>
                <span ref={textRef} className='text-amber-300'> 
                    {' '}Full
                    <span className='text-amber-400'>-Stack </span>
                    <span className='text-amber-500'>Developer</span>
                </span>
            </h1>
            <p className='mt-10 text-lg mb-10'>
                Passionate about creating slick, responsive, and easy-to-use websites.<br/>
                I specialize in using clear, modern code to bring website designs to life.
            </p>

             <button className='px-8 py-3 bg-amber-500 hover:bg-orange-500 to-orange-500 rounded-xl transition-all duration-300'
              onClick={() => {
                console.log('Clicked!');
                onSelect('projects');
              }}

             >
                Check My projects 
              </button>

        </div>
        
                  
      
    </div>
  )
}

export default HeroSection