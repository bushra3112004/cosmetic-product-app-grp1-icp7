import "./Signup.css"
import gmail from "./signup-icon/gmail.png"
import facebook from "./signup-icon/facebook.png"
import twitter from "./signup-icon/twitter.png"
import signupimage from "./signup-icon/banner3-img.png"
import toast, { Toaster } from 'react-hot-toast'
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"

function Signup() {
    return (
    <>
    <Navbar/>
        <div className="sign-in-container">

            <img src={signupimage} className="signup-img" />

            <div className="sign-in-form-container">

                <h1 className="sign-in-text">Sign Up</h1>

                <div className="sign-in-logo-img-container">
                    <img src={gmail} className="sign-logo-img" />
                    <img src={facebook} className="sign-logo-img" />
                    <img src={twitter} className="sign-logo-img" />
                </div>

                <div className="sign-form-container">
                    <form>
                        <input type="text" placeholder="Name" className="input-box" />
                        <input type="email" placeholder="Email" className="input-box" />
                        <input type="password" placeholder="password" className="input-box" />
                    </form>
                </div>

                <div>
                    <button type="submit" className="signup-btn"
                     onClick={
                        () => {
                          toast.success("You are  Successfully sign up!")
                        }
                      }>Sign up</button>
                </div>
            </div>
        </div>
        <Toaster/> 
        <Footer/>
    </>
   

    )
}

export default Signup