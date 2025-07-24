import React, { useState, useEffect } from 'react'
import { navItems } from '../constants'
import { ChevronLeft, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import logo from '../assets/Lin_Logo.png'

const SideHeader = ({ onSelect, selectedSection }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)


    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href) => {
    onSelect(href);
    setMenuOpen(false);
  };

  if (isMobile) {
    return (
      <nav className='sticky top-0 z-50 w-full bg-neutral-900 text-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
          <div className='flex items-center gap-2 cursor-pointer' onClick={() => handleNavClick('hero')}>
            <img src={logo} alt='Logo' className='h-8 w-8' />
            <h1 className='text-lg font-semibold'>Lin Daaboul</h1>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={26} /> : <Menu size={26} />}</button>
        </div>

        {menuOpen && (
          <div className='lg:hidden bg-neutral-800 px-4 py-6 shadow-md w-full'>
            <ul className='flex flex-col items-center space-y-4'>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className={`cursor-pointer hover:text-orange-500 transition ${
                    selectedSection === item.id ? 'text-orange-400 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
            <div className='flex justify-center gap-6 mt-6'>
              <a href='https://github.com/leen-gh' className='text-yellow-400 hover:text-orange-500'>
                <Github size={24} />
              </a>
              <a href='https://www.linkedin.com/in/lin-daaboul-398b3815a/' className='text-yellow-500 hover:text-orange-500'>
                <Linkedin size={24} />
              </a>
              <a href='mailto:leen.ghaleb.d@gmail.com' className='text-yellow-600 hover:text-orange-500'>
                <Mail size={24} />
              </a>
            </div>
          </div>
        )}
      </nav>
    );
  }

  return (
    <div
      className={`${
        open ? 'w-60' : 'w-20'
      }  h-screen p-5 pt-8 relative duration-300 flex flex-col justify-between`}
    >

      <ChevronLeft
        className={`absolute cursor-pointer text-orange-400 -right-3 w-10 ${
          !open && 'rotate-180 top-12'
        }`}
        onClick={() => setOpen(!open)}
      />


      <div>
        <div className='flex gap-x-3 items-center'>
          <img
            src={logo}
            className={`cursor-pointer duration-500 h-10 w-10 ${
              open && 'rotate-[360deg] h-10 w-10'
            }`}
            onClick={() => {onSelect('hero') 
              setOpen(false)}}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            Lin Daaboul
          </h1>
        </div>


        <ul className='pt-6'>
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {onSelect(item.href)
                              setOpen(false)}}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white hover:text-orange-500 text-gray-300 text-sm items-center gap-x-4 
              ${item.gap ? 'mt-9' : 'mt-2'} ${
                selectedSection === item.id ? 'bg-gray-600' : ''
              }`}
            >
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>


      <div
        className={`flex ${
          open ? 'flex-row' : 'flex-col'
        } duration-500 items-center justify-center gap-4 py-4`}
      >
        <a
          href='https://github.com/leen-gh'
          className='text-yellow-400 hover:text-orange-500 transition-colors'
        >
          <Github size={24} />
        </a>
        <a
          href='https://www.linkedin.com/in/lin-daaboul-398b3815a/'
          className='text-yellow-500 hover:text-orange-500 transition-colors'
        >
          <Linkedin size={24} />
        </a>
        <a
          href='mailto:leen.ghaleb.d@gmail.com'
          className='text-yellow-600 hover:text-orange-500 transition-colors'
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  )
}

export default SideHeader
