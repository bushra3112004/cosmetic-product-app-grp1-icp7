import "./Navbar.css"
import{Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
     <div class="navbar-container">
            <Link to="/" class="nav-item">HOME</Link>
            <Link to="/product" class="nav-item">PRODUCT</Link>
            <Link to="/about" class="nav-item">ABOUT</Link>
            <Link to="/contact" class="nav-item">CONTACT</Link>
            
            
        </div>
    </>
  )
}

export default Navbar