import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { projects } from '../constants';
import Floating from './Floating';

gsap.registerPlugin(ScrollTrigger);

const MyProjects = () => {
    const projectsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.utils.toArray('.project-card').forEach((card) => {
            gsap.from(card, {
              scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse',
              },
              y: 100,
              opacity: 0,
              duration: 1,
              ease: 'power3.out',
            });
          });
        }, projectsRef);
    
        return () => ctx.revert();
    }, []);
  
    
  return (
    <div ref={projectsRef} className='tracking-wide py-10 px-4 min-h-[600px]' id='projects'>
        <div className='max-w-6xl mx-auto'>

            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text'>
                Portfolio
            </h2>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {projects.map((project, index) => (
                <div
                key={index}
                className='project-card group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm cursor-pointer'
                  onClick={() => window.open(project.href, '_blank')}  

                >
                <div className='aspect-video overflow-hidden'>
                    <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                    />
                </div>
                <div className='p-6'>
                    <h5 className='text-xl text-white mb-2'>
                    {project.title}
                    </h5>
                    <p className='text-md text-neutral-500 mb-4'>{project.description}</p>
                    <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech, techIndex) => (
                        <span
                        key={techIndex}
                        className='px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300'
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
                </div>
            ))}
        </div>
      </div>
      <Floating/>  
    </div>
  )
}

export default MyProjects