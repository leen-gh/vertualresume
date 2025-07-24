import React from 'react'
import { features } from '../constants'
import gsap from 'gsap'
import _ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const MyServices = () => {
    const aboutRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.skill-card').map((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse',
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 2,
          ease: 'power3.out',
        })
      })
    }, aboutRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={aboutRef} className='relative pt-10 mt-5 min-h-[600px]' id='services'>
      
      <div className='text-center'>
        <h2 className='text-2xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text'>
          Services
        </h2>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20'>
        {features.map((feature, index) => (
          <div key={index} className='skill-card w-full sm:w-1/2 lg:w-1/3 p-4 hover:rounded-xl hover:bg-white/5'>
            <div className='flex'>
              <div className=' flex mx-6 h-12 w-12 p-2 bg-neutral-900 text-orange-500 justify-center items-center rounded-full'>
                {feature.icon}
              </div>
              <div>
                <h5 className='mt-1 mb-6 text-xl '>{feature.text}</h5>
                <p className='text-md p-2 mb-10 text-neutral-500'>
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyServices