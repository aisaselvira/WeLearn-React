import React from 'react'
import "../css/style-absensi.css";

function Absensi() {
  return (
    <div className="Absensi">
    <div className="background-absensi">
        <div id="absensi">
            <h1>ABSENSI</h1>
        </div>
    </div>

    <div id="absensiii">
            <div id="foto"> 
                <center><img src="img/student.png"/></center>
                <center><p>Siswa</p></center>
            </div>
        </div>

        <div className="absensi-form">
            <div id="absen">
                <div id="card-content">
                    <div id="card-title">
                        <h5>Jangan Lupa Absensi</h5>
                            <div className="underline-title"></div>
                    </div>
                </div>

        <form act method="POST" className="form">

            <label for="name">&nbsp; Nama Siswa/Siswi </label>
                <input id="name" className="form-content" autocomplete="on" required />
                    <div className="form-border"></div>
                            
            <label for="kelas">&nbsp;Kelas Siswa</label>
                <select>
                    <option value="Pilih Jurusan" selected="selected">Pilih Kelas</option>
                    <option value="X">X</option>
                    <option value="XI">XI</option>
                    <option value="XII">XII</option>
                </select>
                            
            <label for="jurusan">&nbsp;Program Keahlian</label>
                <select>
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
                            

            <label for="ket">&nbsp; Keterangan Siswa </label>
                <input id="ket" className="form-content" autocomplete="on" required />
                    <div className="form-border"></div>
                        <label>Jenis Kelamin </label>
                        <label><input type="radio" name="jenis_kelamin" value="laki-laki"/>Laki-Laki</label>
                        <label><input type="radio" name="jenis_kelamin" value="perempuan"/>Perempuan</label>
                        <div className="button-submit">
                            <button type="submit" className="submit"><a href="beranda.html">SUBMIT</a></button>
                        </div>
        </form>
    </div>
</div>
</div>

  )
}

export default Absensi