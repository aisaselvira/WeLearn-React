import React from "react";
import "../css/style-signup.css";
// import image
import gambarsignup from "../img/vektor2.gif"

function Signup() {
  return (
    <div className="Signup">
      <div className="signuppage">
            <img src={gambarsignup} alt="gambarsignup"/>
                  <div id="card">
                        <div id="card-content">
                              <div id="card-title">
                              <h2>SIGN UP</h2>
                              <div className="underline-title"></div>
                              </div>
                        </div>
                        <form>
                              <div className="labels">
                              <label className="label1"> 
                                    <h2>Email</h2>    
                                    <input id="user-email" className="form-content" type="Email" name="Email" placeholder="M a s u k k a n  E m a i l" autocomplete="on" required/>
                              </label>
                              </div>

                              <div className="labels">
                              <label className="label1"> 
                                    <h2>Password</h2>
                                    <input id="user-password" className="form-content" type="Password" name="Password" placeholder="M a s u k k a n  P a s s w o r d" autocomplete="on" required/>
                              </label>
                              </div>
                        </form>

                        <div className="button-login">
                              <button type="submit" className="submit"><a href="login.html">SIGN UP</a></button>
                        </div>
                  </div>
            </div>
      </div>
  );
}

export default Signup;
