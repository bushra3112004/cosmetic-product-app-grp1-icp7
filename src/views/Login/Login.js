
import "./Login.css"
import ProfileImg from "./person.png"

function login(){
   
      return(
          <form>
            <div className="main-container">
            <img src={ProfileImg} className="profile-img"/>
            <div className="container">
              <label>Username:
                <br></br>
                  <input type="text" />
              </label>
              <br></br>
              <label>Password:
                <br></br>
                <input type="password"/>
              </label>
            <br></br>
                      <button type="submit">Login</button>
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