import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-absensi.css";

import student from "../img/student.png"

function Absensi() {
  return (
    <div className="Absensi">
    <div className="background-absensi">
        <div id="absensi">
            <h1>ABSENSI</h1>
        </div>
    </div>

    <div id="absensiii">
            <div id="foto-absensi"> 
                <center><img className="gb-absensi" src={student} alt="Welearn"/></center><br/>
                <center><p className="p-absensi"><strong>Siswa</strong></p></center>
            </div>
        </div>

        <div className="absensi-form">
            <div id="absen">
                <div id="card-content-absensi">
                    <div id="card-title-absensi">
                        <h5 className="absensi">Jangan Lupa Absensi</h5>
                            <br/><div className="underline-title-absensi"></div>
                    </div>
                </div>

        <form act method="POST" className="form-absensi">

            <label className="label-absensi" for="name">&nbsp;<h1 className="h1-absensi">Nama Siswa / Siswi : </h1></label>
                <input id="name-absensi" className="form-content-absensi" autocomplete="on" required />
                    <div className="form-border-absensi"></div>
                            
            <label className="label-absensi" for="kelas">&nbsp;<h1 className="h1-absensi2">Kelas Siswa :</h1></label>
                <select className="select-absensi">
                    <option value="Pilih Jurusan" selected="selected">Pilih Kelas :</option>
                    <option value="X">X</option>
                    <option value="XI">XI</option>
                    <option value="XII">XII</option>
                </select>
                            
            <label className="label-absensi" for="jurusan">&nbsp;<h1 className="h1-absensi3">Program Keahlian : </h1></label>
                <select className="select-absensi">
                    <option value="Program Keahlian" selected="selected">Program Keahlian</option>
                    <option value="Teknik Bisnis Konstruksi dan Properti">Teknik Bisnis Konstruksi dan Properti</option>
                    <option value="Teknik Desain Pemodelan dan Informasi Bangunan">Teknik Desain Pemodelan dan Informasi Bangunan</option>
                    <option value="Teknik Geomatika">Teknik Geomatika</option>
                    <option value="Teknik Instalasi Tenaga Listrik">Teknik Instalasi Tenaga Listrik</option>
                    <option value="Teknik Audio Video">Teknik Audio Video</option>
                    <option value="Teknik Pemesinan">Teknik Pemesinan</option>
                    <option value="Teknik Fabrikasi dan Manufaktur">Teknik Fabrikasi dan Manufaktur</option>
                    <option value="Teknik Kendaraan Ringan Otomotif">Teknik Kendaraan Ringan Otomotif</option>
                    <option value="Teknik Komputer dan Jaringan">Teknik Komputer dan Jaringan</option>
                    <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
                </select>
                            

            <label className="label-absensi" for="ket">&nbsp;<h1 className="h1-absensi4">Keterangan Siswa : </h1></label>
                <input id="ket" className="form-content-absensi" autocomplete="on" required />
                    <div className="form-border-absensi"></div>
                        <label className="label-absensi"><h1 className="h1-absensi5">Jenis Kelamin : </h1></label>
                        <label className="label-absensi"><input className="input-absensi" type="radio" name="jenis_kelamin" value="laki-laki"/>Laki-Laki</label>
                        <label className="label-absensi"><input className="input-absensi"type="radio" name="jenis_kelamin" value="perempuan"/>Perempuan</label>
                        
                <Link to="/home/absensi/absensi2">
                    <div className="button-submit-absensi">
                            <button type="submit" className="submit-absensi"><a href="beranda.html">SUBMIT</a></button>
                    </div>
                </Link>
        </form>
    </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1F375B" fill-opacity="1" d="M0,32L48,58.7C96,85,192,139,288,181.3C384,224,480,256,576,229.3C672,203,768,117,864,101.3C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</div>

  )
}

export default Absensi