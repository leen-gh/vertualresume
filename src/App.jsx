import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MyServices from './components/MyServices';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import SideHeader from './components/SideHeader';
import MouseAnimation from './components/MouseAnimation';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('hero');

  const sections = {
    hero: <HeroSection  onSelect={setSelectedSection}/>,
    services: <MyServices />,
    projects: <MyProjects />,
    contact: <Contact />,
  };

  return (
    <div className='lg:flex cursor-none'>
      <SideHeader onSelect={setSelectedSection} selectedSection={selectedSection} />

      <div className=' relative max-w-7xl mx-auto h-screen flex-1'>
        <MouseAnimation/>
        <Toaster position='bottom-right' />
        {sections[selectedSection] || <HeroSection onSelect={setSelectedSection} />} 
      </div>
      
    </div>
  );
};

export default App;
