import React from "react";
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
          <img src={logo} alt='logo' className='logo' />
            <div className='About'>
             <h2>About Us</h2>
             <p>On our page you are able to search for your favorite cocktails, their ingredients or how to make them</p>
          </div>
            
            <Link to="/CocktailList" className="button">List of cocktails</Link>
                
        </div>
      );
}
export default Home;