
import logo from "./../../assets/logo.png"
import './Footer.css';
import gmail from "./../Footer/footer-icon/gmail.png"
import { Link } from 'react-router-dom';


function Footer() {
    return (<>

        <div className="footer">
            <div className="footer-desc">
                <div className="footer-img">
                    <img src={logo} className="img" />
                </div>

                <div className="quick-links">
                    <p><b><u>Quick Links</u></b></p>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <p>Search</p>
                    <p>Contact</p>
                    <p>About</p>
                    <a className="footer-name"> Customer Rreview</a>
                </div>

                <div className="useful-links">
                    <span><b><u>Usefull Links</u></b></span>
                    <span>Privacy Policy</span>
                    <span>Terms And conditions</span>
                    <span>Desclimer</span>
                    <span>Support</span>
                    <span>FAQ</span>
                </div>

                <div className="contact">
                    <p><b>CONTACT</b></p>
                    <p>123, sarafa road PSK 3, </p>
                    <p>Chimur , Chandrapur , India</p>

                    <div>
                        <img src={gmail} className='footer-icon' />
                    </div>
                </div>
                </div>
                </div>
                

            </>  )
}

            export default Footer