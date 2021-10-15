import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-absensi2.css";

import ceklist from "../img/ceklistt.gif"

function Absensi2() {
  return (
    <div className="Absensi2">
      <h1 className="h1-ceklis">Absent Successfully !</h1>
      <h2 className="h2-ceklis">Terimakasih Anda Telah Melakukan Absensi</h2>
      <img className="ceklis" src={ceklist} alt="Welearn" />
      <div className="button-absensi-ceklist">
      <Link to="/home">
          <button type="button" className="button-ceklist"><strong>Selesai</strong></button>
      </Link>
      </div>
    </div>

  )
}

export default Absensi2