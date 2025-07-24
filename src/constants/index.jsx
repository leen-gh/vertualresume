import { MonitorSmartphone,  Palette, Blocks, Mail, MapPin, PhoneCall, Mailbox, MapPinned } from 'lucide-react'


import omg from '../assets/profile-pictures/www.omgyno.com_.png'
import cry from '../assets/profile-pictures/Crystal Suger.png'
import eve from '../assets/profile-pictures/Eventure.png'
import larsson from '../assets/profile-pictures/Larsson Academy .png'



export const navItems = [
  { label: 'Services', href: 'services' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
  
]


export const features = [
  {
    icon: <MonitorSmartphone />,
    text: 'Website Development',
    description:
      'Building websites from ready-made designs with clean, efficient code, ensuring smooth performance and a polished look across all devices.',
  },
  {
    icon: <Palette />,
    text: 'Web Design',
    description:
      'Designing websites from scratch with modern, minimalist, and user-friendly aesthetics, ensuring a seamless blend of functionality and brand identity to meet specific goals.',
  },
  {
    icon: <Blocks />,
    text: 'WordPress Development',
    description:
      'Building dynamic, scalable WordPress websites with custom themes, plugins, and optimized performance, ensuring security, flexibility, and seamless management for any project.',
  },
  
]

export const projects = [
  {
    title: 'System and Website Enhancement with Omgyno',
    description: 'Collaborated to improve and update an existing website, optimizing performance, enhancing user experience, and implementing modern features to meet evolving business needs.',
    image:
      omg,
    tech: ['PHP', 'HTML', 'CSS', 'JS'],
    href:'https://www.omgyno.com/'
  },
  {
    title: 'Event Booking Website',
    description: 'Developed Eventure, a dynamic event management platform for seamless event planning and ticket booking, as part of a collaborative team effort.',
    image: eve,
    tech: ['React', 'Node.js', 'MongoDB'],
    href:'https://eventure-000.vercel.app/',
  },
  {
    title: 'Business Informational Websites',
    description: 'Designed and developed business websites to showcase services, company information, and enhance online presence for clients.',
    image: larsson,
    tech: ['WordPress', 'Elementor', 'woocommerce'],
    href:'https://larssonint.com/sport-academy/',
  },
  {
    title: 'WordPress Customized Themes',
    description: 'Created custom WordPress themes tailored to client needs, ensuring responsive design, user-friendly interfaces, and seamless functionality.',
    image: cry,
    tech: ['PHP', 'HTML', 'CSS', 'JS'],
    href:'#',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Optimized website content, structure, and performance to improve search engine rankings, increase organic traffic, and enhance online visibility for better user engagement.',
    image: 'https://images.unsplash.com/photo-1686061594183-8c864f508b00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Yoast SEO', 'MathRank'],
    href:'#',
  },
  {
    title: 'UI Designing',
    description: 'Designed intuitive and visually appealing user interfaces to enhance user experience, improve usability, and create engaging digital experiences for web and mobile applications.',
    image: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['Adobe XD', 'Figma', 'React', 'Bootstrap', 'TailwindCSS','JS'],
    href:'#',
  },
  
]


export const contactInfo = [
  {
    icon: <Mailbox size={45}/>,
    text: (
        <>
          Email:
          <br />
          leen.ghaleb.d@gmail.com
        </>
      ),
    onClick: 'leen.ghaleb.d@gmail.com'
  },
  {
    icon: <PhoneCall size={45} />,
    text: (
        <>
          Phone Number:
          <br />
          +962 787 8943 72
        </>
      ),
    onClick: '+962 787 8943 72'
  },
  {
      icon: <MapPinned size={45} />,
      text: (
        <>
          Amman, Jordan
          <br />
          Istanbul, Turkey
        </>
      ),

  },
  
]



