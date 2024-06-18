
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "./logo-black.png";
import menuicon from "./menu.png";
import { useState, useEffect } from 'react';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (<>
    
    <div className={"navbar-container " } >
    <div className='logo-container'>
        <img src={logo} className='logo'/>

          <img src={menuicon} className='menuicon' onClick={toggleMenu}/>
          </div>

         {/* for small device */}
         {
          isMenuOpen ?
         <div className='menu-icon-container'>
            <Link to="/" className='menu-navbar-item'>Home</Link>
            <Link to="/product"  className='menu-navbar-item'>Products</Link>
            <Link to="/about"className='menu-navbar-item'>About</Link>
            <Link to="/contact" className='menu-navbar-item'>Contact</Link>
            <Link to="/login" className='menu-navbar-item'>Log-in</Link>
            <Link to='/signup' className='menu-sign-up '>Sign-up</Link>
          </div>: null}
       
        <div className={'nav-item-container '}>
         <Link to="/" className='nav-item'>Home</Link>
         <Link to="/product"  className='nav-item'>Products</Link>
         <Link to="/about"className='nav-item'>About</Link>
         <Link to="/contact" className='nav-item'>Contact</Link>
         <Link to="/login" className='nav-item'>Log-in</Link>
       </div>
       <div>
         <Link to='/signup' className='sign-up '>Sign-up</Link>
       </div>
    </div> 
    </>
  )
}

export default Navbar