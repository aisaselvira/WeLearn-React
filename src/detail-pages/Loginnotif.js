import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-loginnotif.css";

import ceklistlogin from "../img/login.gif"

function Loginnotif() {
  return (
    <div className="Loginnotif">
      <h1 className="h1-ceklis-login">Login Successfully !</h1>
      <h2 className="h2-ceklis-login">Terimakasih Anda Berhasil Login</h2>
      <img className="ceklis-login" src={ceklistlogin} alt="Welearn" />
      <div className="button-absensi-ceklist-login">
      <Link to="/home">
          <button type="button" className="button-ceklist-login"><strong>Selesai</strong></button>
      </Link>
      </div>
    </div>

  )
}

export default Loginnotif