import React from "react";
import {Link} from 'react-router-dom'
import "../css/style-signup.css";
// import image
import gambarsignup from "../img/vektor2.gif"

function Signup() {
  return (
    <div className="Signup">
      <div className="signuppage">
            <img src={gambarsignup} alt="gambarsignup"/>
                  <div id="card-signup">
                        <div id="card-content-signup">
                              <div id="card-title-signup">
                              <h2>SIGN UP</h2>
                              <div className="underline">
                              <div className="underline-title-signup"></div>
                              </div>
                              </div>
                        </div>
                        <form className="form-signup">
                              <div className="labels-signup">
                              <label className="label1-signup"> 
                                    <h2>Nama Depan :</h2>    
                                    <input id="user-email" className="form-content-signup" type="Email" name="Email" placeholder="M a s u k k a n  N a m a  D e p a n" autocomplete="on" required/>
                              </label>
                              </div>
                              
                              <div className="labels-signup">
                              <label className="label1-signup"> 
                                    <h2>Nama Belakang :</h2>    
                                    <input id="user-email" className="form-content-signup" type="Email" name="Email" placeholder="M a s u k k a n  N a m a  B e l a k a n g" autocomplete="on" required/>
                              </label>
                              </div>

                              <div className="labels-signup">
                              <label className="label1-signup"> 
                                    <h2>Password</h2>
                                    <input id="user-password" className="form-content-signup" type="Password" name="Password" placeholder="P a s s w o r d" autocomplete="on" required/>
                              </label>
                              </div>
                              
                              <div className="labels-signup">
                              <label className="label1-signup"> 
                                    <h2>Confirm Password</h2>
                                    <input id="user-password" className="form-content-signup" type="Password" name="Password" placeholder="C o n f i r m  P a s s w o r d" autocomplete="on" required/>
                              </label>
                              </div>
                        </form>

                        <Link to="/Login">
                        <div className="button-login-signup">
                              <button type="submit" className="submit-signup"><a href="login.html">Sign Up</a></button>
                        </div>
                        </Link>
                  </div>
            </div>
      </div>
  );
}

export default Signup;
