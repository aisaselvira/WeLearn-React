import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-beranda.css";

// import image
import weLearn from '../img/we-learn.jpeg'
import gbb from "../img/gbb.gif"
import vektor2 from "../img/vektor2.gif"
import gif12 from "../img/giff12.gif"
import gb5 from "../img/gb5.jpg"
import gb4 from "../img/gb4.jpg"
import ujian from "../img/ujian.png"
import healing from "../img/healing.png"
import instagram from "../img/instagram.png"
import facebook from "../img/facebook.png"
import twitter from "../img/twitter.png"
import linkedin from "../img/linkedin.png"
import welearnnn from "../img/welearnnn.jpeg"


function Beranda() {
  return (
    
    <div className="Beranda">
      <header>
        <div className="container">
          <img src={weLearn} alt="Welearn"/>
          <ul>
            <Link to="/home/wemateri">
            <li>
              <a href="WMateri.html">
                <strong>WeMateri</strong>
              </a>
            </li>
            </Link>
            <Link to="/home/wsat">
            <li>
              <a href="WSAT.html">
                <strong>WSAT</strong>
              </a>
            </li>
            </Link>
            <li>
              <a href="jadwal-ujian.html">
                <strong>Jadwal</strong>
              </a>
            </li>
            <li>
              <a href="absensi.html">
                <strong>Absensi</strong>
              </a>
            </li>
            <li className="active">
              <a href="beranda.html">
                <strong>Home</strong>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className="banner">
        <div className="background-home">
          <div className="ini-time">
            <div className="time">
              <span className="hms"></span>
              <span className="ampm"></span>
              <br></br>
              <span className="date"></span>
            </div>
          </div>

          <img src={vektor2} alt="Welearn"/>
          <div className="berandaaa">
            <h1 className="h1-beranda">
              Learn Anytime, <span>Anywhere</span>
            </h1>
            <h1 className="h1-beranda2">
              <br></br> And <span>Accelerate Future</span>
            </h1>
            <div className="line">
              <div className="garis"></div>
            </div>
          </div>

          <div className="wsat">
            <div id="ini-wsat">
              <div className="container">
                <img src={gif12} alt="Welearn"/>
                <div className="text-wsat2">
                  <h2>
                    Yuk kenali fitur - fitur menarik apa saja<br></br> yang ada
                    di WeLearn !{" "}
                  </h2>
                </div>
                <div className="button-wsat2">
                  <button type="submit" className="btn-wsat2">
                    <a href="#ini-wsat2">
                      <strong>Yuk Simak Sekarang !</strong>{" "}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wsat2">
        <div id="ini-wsat2">
          <div className="container">
            <h1 className="ws">Apa sih WSAT itu ?</h1>
            <br />
            <img src={gbb} alt="Welearn"/>
            <div className="text-wsat">
              <h3>WSAT kepanjangan dari We - Scholastic Assesment Test</h3>
              <h3>
                WSAT merupakan test standar untuk masuk ke Perguruan Tinggi di{" "}
                <br></br>luar negeri.{" "}
              </h3>
              <br></br>
            </div>

            <div className="button-wsat">
              <button type="submit" className="btn-wsat">
                <a href="https://parekampunginggris.co/apa-itu-test-sat-berikut-penjelasanya/">
                  <strong>Baca Selengkapnya</strong>{" "}
                </a>
              </button>
            </div>
            <div className="text-bottom">
              <h2>
                Siapa sih yang ngga mau masuk universites ternama di luar
                negeri?
              </h2>
              <br></br>
              <h3>
                Nah maka dari itu disini WeLearn menyediakan latihan Scholastic
                Assesment Test untuk <br></br> kalian yang punya rencana dan
                mimpi kuliah di luar negeri
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="wsat3">
        <div id="ini-wsat3">
          <div className="container">
            <h1 className="ws3">
              WeLearn menyediakan 2 fitur menarik nih untuk sobat semuanya !{" "}
              <br></br>Yaitu Fitur WLesson dan WExam
            </h1>
            <br></br>
            <div className="box-card">
              <table>
                <tr>
                  <td>
                    <div className="box-kls7">
                      <img className="kls7" src={gb5} alt="Welearn"/>
                      <h1 className="text-kls">WLesson</h1>
                      <h2 className="text-kls2">
                        Di fitur ini kami menyediakan Test Potensi Skolastik (
                        TPS ) dan Test Potensi Akademik ( TPA ) untuk membantu
                        kalian masuk ke Perguruan Tinggi
                      </h2>
                      <button type="button" className="button-kls7">
                        <a href="mata-pelajaran-kelas7.html">
                          <strong>Selengkapnya</strong>
                        </a>
                      </button>
                    </div>
                  </td>

                  <td>
                    <div className="box-kls8">
                      <img className="kls8" src={gb4} alt="Welearn"/>
                      <h1 className="text-kls">WExam</h1>
                      <h2 className="text-kls2">
                        Di fitur ini kami menyediakan Try Out, Test Keterampilan
                        serta Test Penjurusan untuk mengenal lebih dalam potensi
                        yang kalian miliki masing-masing
                      </h2>
                      <button type="button" className="button-kls8">
                        <a href="mata-pelajaran-kelas8.html">
                          <strong>Selengkapnya</strong>
                        </a>
                      </button>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="card2">
        <div className="box-beranda-welearn">
          <h1>
            Kerjakan ujian bersama WeLearn <br></br>Dapatkan soal-soal materi
            lengkap yang ada <br></br>di fitur kami !
          </h1>
          <div className="box-beranda1">
            <img className="ujian" src={ujian} alt="Welearn"/>
            <h3 className="teks-w-ujian">W-Ujian</h3>
          </div>
          <div className="w-ujian">
            <button type="button" className="button-w-ujian">
              <a href="ujian.html">
                <strong>Kerjakan Sekarang</strong>
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="card3">
        <div className="box-beranda-welearn2">
          <h1>
            Nikmati fitur W-Fresh <br></br>sebagai refreshing agar tidak bosan{" "}
            <br></br>Selamat Menikmati !
          </h1>
          <div className="box-beranda2">
            <img className="fresh" src={healing} alt="Welearn"/>
            <h3 className="teks-w-fresh">W-Fresh</h3>
          </div>
          <div className="w-fresh">
            <button type="button" className="button-w-fresh">
              <a href="https://github.com/">
                <strong>Coba Sekarang</strong>
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="card4">
        <div className="box-beranda-welearn3">
          <h1>
            " Bersama <span>WeLearn</span> Belajar Menjadi <span>Cerdas,</span>{" "}
            <br></br> <span>Cepat,</span> dan <span>Mudah</span> "
          </h1>
        </div>
      </div>

      <div className="card6">
        <div className="ini-card6"></div>
      </div>

      <div className="card5">
        <div className="ini-card5">
          <h1>Contact</h1>
          <img className="contact" src={welearnnn} alt="Welearn"/>
          <h3>
            WeLearn adalah sebuah website pendidikan <br></br>yang dibuat
            sebagai solusi dalam memudahkan <br />
            pengguna untuk mengatasi pembelajaran <br /> jarak jauh menjadi
            lebih efektif, mudah, cepat <br /> dan paraktis
          </h3>
          <div className="col-3">
            <h4>Addres</h4>
            <p>Surakarta, Jawa Tengah, Indonesia</p>
          </div>

          <div className="col-3">
            <h4>Email</h4>
            <p>welearnforall20@gmail.com</p>
          </div>

          <div className="col-3">
            <h4>Telp/WA</h4>
            <p>+62 8727 706 328</p>
          </div>
        </div>
      </div>

      <footer>
        <a href="https://www.instagram.com/we_learn_smk2/">
          <img src={instagram} alt="Welearn"/>
        </a>
        <a href="https://www.facebook.com">
          <img src={facebook} alt="Welearn"/>
        </a>
        <a href="https://twitter.com/inipiiraaaaaa?s=08">
          <img src={twitter} alt="Welearn"/>
        </a>
        <a href="https://www.linkedin.com">
          <img src={linkedin} alt="Welearn"/>
        </a>

        <div className="container">
          <br />
          <small>Copyright 2021 @WeLearn</small>
        </div>
      </footer>

      <script src="time.js"></script>
    </div>
  );
}

export default Beranda;
