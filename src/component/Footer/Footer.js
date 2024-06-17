
import logo from "./logo-white.png"
import './Footer.css';
import gmail from "./../Footer/footer-icon/gmail.png"
import facebook from "./../Footer/footer-icon/facebook.png"
import twitter from "./../Footer/footer-icon/twitter.png"
import google from "./../Footer/footer-icon/google.png"
import { Link } from 'react-router-dom';


function Footer() {
    return (<>

        <div className="footer">
            <div className="footer-desc">
                <div className="footer-img">
                    <img src={logo} className="img" />
                </div>

                <div className="quick-links">
                    <span><b><u>Quick Links</u></b></span>
                    <Link to="/" className="links"> Home   </Link>
                    <Link to="/product" className="links"> Product </Link>
                    <Link to="/about" className="links"> About   </Link>
                    <Link to="/contact" className="links"> Contact </Link>
                
                </div>

                <div className="useful-links">
                    <span><b><u>Usefull Links</u></b></span>
                    <span>Privacy Policy</span>
                    <span>Terms And conditions</span>
                    
                    <span>Support</span>
                    <span>FAQ</span>
                </div>

                <div className="contact">
                    <p><b>CONTACT</b></p>
                    <span> Lokmanya Nagar,
                    Hingna Road, Hingna, Nagpur-440016</span>
               

                    <div>
                        <img src={gmail} className='footer-icon' />
                        <img src={facebook} className='footer-icon' />
                        <img src={twitter} className='footer-icon' />
                        <img src={google} className='footer-icon' />
                    </div>
                </div>
                </div>
                </div>
                

            </>  )
}

            export default Footer