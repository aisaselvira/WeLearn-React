import React from 'react'
import { Link } from "react-router-dom";
import "../css/style-tpstka.css";

import gbtpa1 from "../img/daftar.png"
import gbtpa2 from "../img/daftar.png"
import gbtpa3 from "../img/daftar.png"
import gbtpa4 from "../img/daftar.png"

function TPA() {
  return (
    <div className="TPA">
      <h1 class="judultpstka">
            <Link to="/home/wsat/weexam">
            <div>
                  <a href="WeExam.html" class="log-out-tpstpa">Back</a>
            </div>
            </Link>
            Tes Potensi Akademik
      </h1>
              
     <div class="row1-tpstpa">
            <div id="two-tpstpa">
                <div class="about-col1-tpstpa">
                    <p><strong>Verbal</strong></p>
                    <img className="gb-tps" src={gbtpa1} alt="Welearn"/>
                    <Link to="/home/wsat/weexam/tpa/tryouttps">
                    <div className="btn-tpa">
                    <button type="button" id="submit-tpstpa2"><a href=""><strong>Try Out</strong></a></button>
                    </div>
                    </Link>
              </div>
  
              <div class="about-col1-tpstpa">
                    <p><strong>Angka</strong></p>
                    <img className="gb-tps" src={gbtpa2} alt="Welearn"/>
                     <Link to="/home/wsat/weexam/tpa/tryouttps">
                     <div className="btn-tpa">
                        <button type="button" id="submit-tpstpa2"><a href=""><strong>Try Out</strong></a></button>
                    </div>
                    </Link>
              </div>
            </div>
    </div>

           <div id="row2-tpstpa">
            <div id="two-tpstpa">
                <div class="about-col2-tpstpa">
                    <p><strong>Logika</strong></p>
                    <img className="gb-tps" src={gbtpa3} alt="Welearn"/>
                    <Link to="/home/wsat/weexam/tpa/tryouttps">
                    <div className="btn-tpa">
                        <button type="button" id="submit-tpstpa2"><a href=""><strong>Try Out</strong></a></button>
                    </div>
                    </Link>
              </div>
  
              <div class="about-col2-tpstpa">
                  <p><strong>Spasial</strong></p>
                  <img className="gb-tps" src={gbtpa4} alt="Welearn"/>
                  <Link to="/home/wsat/weexam/tpa/tryouttps">
                  <div className="btn-tpa">
                        <button type="button" id="submit-tpstpa2"><a href=""><strong>Try Out</strong></a></button>
                  </div>
                  </Link>
            </div>
            </div>
           </div>

      <h2 id="akhir-tpstpa">Selamat Mengerjakan !</h2>

</div>

  )
}

export default TPA