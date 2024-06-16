
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "./../../assets/logo.png";

function Navbar() {
  return (<>
    <div className='navbar-container'>
        <img src={logo} className='logo'/>
         
        
        <div className='nav-item-container'>
         <Link to="/" className='nav-item'>Home</Link>
         <Link to="/product"  className='nav-item'>Products</Link>
         <Link to="/about"className='nav-item'>About</Link>
         <Link to="/contact" className='nav-item'>Contact</Link>
         <Link to="/login" className='nav-item'>Log-in</Link>
       </div>
       <div className='icon-container'>
         <Link to='/signup' className='sign-up'>Sign-up</Link>
       </div>
    </div> 
    </>
  )
}

export default Navbar