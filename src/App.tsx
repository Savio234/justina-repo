import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './scss/main.scss';
import './scss/color/color.scss';
import './scss/typography/fonts.scss';
import { Outlet } from 'react-router-dom';
//import Products from './components/products';
// import { sampleProducts } from "./data";




const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
      {/* <main>
        <ul>
          {sampleProducts.map((product) => (
            <li>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
            </li>
          ))}
        </ul>
      </main> */}
    </>
  );
}


export default App;
