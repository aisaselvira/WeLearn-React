import React from 'react'
import "../css/style-wsat.css";

function WSAT() {
  return (
    <div className="WSAT">
    <header>
      <div className="container">
        <nav>
          <img src="img/logo-wsat1.jpeg" />
          <ul>
            <li>
              <div id="button-wsatt">
                <button type="submit" id="wsatt">
                  <a href="WLesson.html">WeLesson</a>
                </button>
              </div>
            </li>
            <li>
              <div id="button-wsatt">
                <button type="submit" id="wsatt">
                  <a href="WeExam.html">WeExam</a>
                </button>
              </div>
            </li>
          </ul>
        </nav>
        <div className="left-col">
          <h1>
            Masuk dan dapatkan materi pelajaran serta latihan soal ujian PTN
          </h1>
          <div className="left-container">
            <div className="box">
              <h2>Tes Potensi Skolastik</h2>
              <a href="">
                <img src="img/bel.gif" />
              </a>
              <span
                >Tes Potensi Skolastik ,temukan berbagai macam materi dan
                latihan soal tentang logika untuk persiapan masuk ke Perguruan
                Tinggi Negeri favoritmu
              </span>
            </div>

            <div className="box">
              <h2>Tes Potensi Akademik</h2>
              <a href="">
                <img src="img/sti.gif" />
              </a>
              <span
                >Tes Potensi Akademik ,temukan berbagai macam materi dan latihan
                soal perhitungan untuk persiapan masuk ke Perguruan Tinggi
                Negeri favoritmu
              </span>
            </div>
          </div>
        </div>
        <div className="right-col">
          <h1>
            Akses materi khusus yang telah disiapkan WeLearn untuk kamu kelas 12
            yang sedang mempersiapkan seleksi masuk Perguruan Tinggi Negeri
            impianmu
          </h1>
          <div className="back-video">
            <img src="img/gbbb.gif" />
          </div>
        </div>
      </div>
    </header>
    </div>

  )
}

export default WSAT