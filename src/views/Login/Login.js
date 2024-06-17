import "./Login.css";
import ProfileImg from "./person.png";
import Navbar from "./../../component/Navbar/Navbar"
import Footer from "./../../component/Footer/Footer"


function Login() {
  return (
    <>
      <Navbar />

    <form className="body">
      <h1 className="heading">Login Form</h1>
      <div className="main-container">
        <img src={ProfileImg} alt="Profile" className="profile-img" />
        <div className="container">
          <label htmlFor="uname" className="input-name">
            <b>Username:</b>
            <br />
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              className="input-box"
            />
          </label>
          <br />
          <label htmlFor="psw" className="input-name">
            <b>Password:</b>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              className="input-box"
            />
          </label>
          <br />
          <button type="submit" className="submit-btn">
            Login
          </button>
          <br />
          <label className="chk-box">
            <input type="checkbox" name="remember" /> Remember me
          </label>
          <br></br>
         <b><hr></hr></b>
          <div className="last-container">
            <button type="button" className="cancel-btn">Cancel</button>
            <span className="psw" >Forgot <a href="#">password?</a></span>
          </div>
          
        </div>
      </div>
    </form>
      <Footer />
    </>
  );
}

export default Login;