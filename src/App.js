import React from 'react';
import './App.css'
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Milestones from './Components/Milestones';
import Portfolio from './Components/Portfolio';
import Pricing from './Components/Pricing';
import ScrollToTop from './Components/ScrollToTop';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Testimonials from './Components/Testimonials';
import Title from './Components/Title';
import Video from './Components/Video';
import {motion} from 'framer-motion';

const App = () => {
  return (
    <motion.div 
      initial="hidden" 
      animate="show"
    >
      <Home />
      <Services />
      <Title />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  )
}

export default App