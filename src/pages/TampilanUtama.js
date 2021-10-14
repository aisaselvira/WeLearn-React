import React from "react";
import {Link} from 'react-router-dom'
import "../css/style-utama.css";
// import image
import utama from "../img/hm5.png"
import logoutama from "../img/logo-welearn-utama.jpeg"

function TampilanUtama() {
  return (
    <div className="TampilanUtama">
              <div className="bg-utama">
                    <img className="img-logo-utama" src={logoutama} alt="Welearn"/>
                    <div className="gb-utama">
                          <img className="img-utama" src={utama} alt="Welearn"/>
                    </div>
                    <div className="text-beranda-utama">
                          <h1 className="beranda-h1">Welcome To <br/>WeLearn</h1>
                    </div>
                    <div className="text-beranda-utama2">
                           <h2 className="beranda-h2">Make a Dreams Come True With WeLearn <br/> Let's Use Education Website Platform now</h2>
                    </div>

            <div className="button-login-signup">
             <Link to="/Login">
                <div id="button-login1">
                  <button type="submit" id="submit-login1">
                    <a href="login.html">Login</a>
                  </button>
                </div>
            </Link>
            
            <Link to="/Signup">
                <div id="button-signup1">
                  <button type="submit" id="submit-signup1">
                    <a href="login.html">SignUp</a>
                  </button>
                </div>
            </Link>
            </div>
              </div>
      </div>
  );
}

export default TampilanUtama;
