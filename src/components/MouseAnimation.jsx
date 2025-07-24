import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import logo from '../assets/icons8-semicolon-24.png';
import logo2 from '../assets/icons8-dot-24.png';

const MouseAnimation = () => {
  useGSAP(() => {
    let lastX = 0;
    let lastY = 0;
    let i = 0;
    const imgs = [logo, logo2, logo];

    const createTail = (x, y) => {
      const img = document.createElement('img');
      img.classList.add('image-trail');
      img.src = imgs[i];
      i = (i + 1) % imgs.length;

      const container = document.querySelector('.trail');
      if (container) container.appendChild(img);

      gsap.set(img, {
        x,
        y,
        scale: 0,
        opacity: 0,
        position: 'absolute',
      });

      gsap.to(img, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });

      gsap.to(img, {
        opacity: 0,
        scale: 0.2,
        duration: 1,
        delay: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          img.remove();
        },
      });
    };

    const handleMouseMove = (e) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dis = Math.sqrt(dx * dx + dy * dy);

      if (dis > 20) {
        createTail(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <div
      className='trail fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]'
      aria-hidden='true'
    ></div>
  );
};

export default MouseAnimation;
