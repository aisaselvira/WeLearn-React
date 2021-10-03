import React from 'react'
import "../css/style-mapel.css";

function Jadwal() {
  return (
    <div className="Jadwal">
      <section className="luar">
            <section className="dalam">
            <section className="about">
                  <h2>Jadwal Ujian</h2><br/>
                  <div className="sejajar">
                  <h3>Senin,10 Agustus 2021</h3>
                  <h3>WAKTU</h3>
                  </div>
            
                  <div className="row">
                  <div className="jadwal-col">
                        <p className="p1">Bahasa Indonesia</p>
                        <p className="p1">Bahasa Inggris</p>
                  </div>

                  <div className="waktu-col">
                        <p className="p2">07.00-10.00</p>
                        <p className="p2">10.00-13.00</p>
                  </div>
                  </div>

                  <div className="sejajar">
                  <h3>Selasa,11 Agustus 2021</h3>
                  <h3>WAKTU</h3>
                  </div>

                  <div className="row">
                  <div className="jadwal-col">
                        <p className="p1">Pendidikan Agama</p>
                        <p className="p1">Sejarah</p>
                  </div>
      
                  <div className="waktu-col">
                        <p className="p2">07.00-10.00</p>
                        <p className="p2">10.00-13.00</p>
                  </div>
                  </div>

            </section>  
            </section>
      </section>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#100B32" fill-opacity="1" d="M0,224L30,234.7C60,245,120,267,180,250.7C240,235,300,181,360,176C420,171,480,213,540,202.7C600,192,660,128,720,117.3C780,107,840,149,900,138.7C960,128,1020,64,1080,42.7C1140,21,1200,43,1260,53.3C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
</div>

  )
}

export default Jadwal