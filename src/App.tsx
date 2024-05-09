import React from 'react';
import Navbar from './components/Navbar';
import SortItems from './components/Sort'
import Hero from './components/Hero';
import Footer from './shared/Footer/Footer'
import './scss/main.scss';
import './scss/color/color.scss';
import './scss/typography/fonts.scss';
import { Outlet } from 'react-router-dom';
//import Products from './components/products';
// import { sampleProducts } from "./data";

import Guarantee from './components/Guarant';


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SortItems />
      <Outlet />
      <Guarantee />
      <Footer />
    </>
  );
}


export default App;
