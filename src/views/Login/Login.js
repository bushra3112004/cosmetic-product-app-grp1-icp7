
import "./Login.css"
import ProfileImg from "./person.png"

function login(){
   
      return(
          <form>
            <h1 className="heading">Login Form</h1>
            <div className="main-container">
            <img src={ProfileImg} className="profile-img"/>
            <div className="container">
              <label for="uname"className="input-name"><b>Username:</b>
                <br></br>
                <input type="text" placeholder="Enter Username" name="uname"  className="input-box"/>
              </label>
              <br></br>
              <label for="psw" className="input-name"><b>Password:</b>
                <br></br>
                <input type="password" placeholder="Enter Password" name="psw" className="input-box"/>
              </label>
            <br></br>
                      <button type="submit" className="submit-btn">Login</button>
                      <br></br>
                      <label>
                          <input type="checkbox" checked="checked" name="remember"/> Remember me
                      </label>
          </div>
          </div>
          </form>
    )
}
export default login