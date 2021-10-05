import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-wemateri.css";

function UjianHariIni() {
  return (
        <div className="UjianHariIni">
                    <section class="waves">
            <img src="img/clock.png"/>
            <h1>UJIAN HARI INI</h1>
      </section>
      

      <section class="gb-ujian">
            <div class="card">
                  <img src="img/vektor2.jpeg"/>
            
                  <table>
                        <tr>
                              <td>
                              <div class="box">
                                          <h2>BAHASA INDONESIA</h2>
                                          <p><strong>90 Menit</strong></p>
                                          <img src="img/clock2.png"/>
                                    </div>
                                    <div class="inibutton">
                                          <button type="button" class="btn-primary"><a href="ujian.html"><strong>Mulai Ujian</strong></a></button>
                                    </div>
                              </td>
            
                              <td>
                                    <div class="box">
                                          <h2>MATEMATIKA</h2>
                                          <p><strong>120 Menit</strong></p>
                                          <img src="img/clock2.png"/>
                                    </div>
                                    <div class="inibutton">
                                          <button type="button" class="btn-primary"><strong>Mulai Ujian</strong></button>
                                    </div>
                              </td>
                        </tr>
                  </table>
            </div>
      </section>
</div>

  )
}

export default UjianHariIni