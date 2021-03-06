import React from "react";
import { Link } from "react-router-dom";
import "../css/style-mapel.css";

import buku from "../img/buku.png";
import vektor from "../img/vektor.png";
import kimia from "../img/kimia.png";
import fisika from "../img/fisika.png";

function MapelKelas8() {
  return (
    <div className="MapelKelas8">
      <section id="pelajaran-mapel">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5DC254"
            fill-opacity="0.28"
            d="M0,64L24,69.3C48,75,96,85,144,80C192,75,240,53,288,80C336,107,384,181,432,208C480,235,528,213,576,170.7C624,128,672,64,720,69.3C768,75,816,149,864,165.3C912,181,960,139,1008,122.7C1056,107,1104,117,1152,122.7C1200,128,1248,128,1296,112C1344,96,1392,64,1416,48L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
        <div className="judul-mapel">
          <center />
          <h1>
            <b>MATA PELAJARAN KELAS 8</b>
          </h1>

          <div className="col-4-mapel">
            <a href="https://google.com">
              <img className="buku-mapel" src={buku} alt="Welearn" />
            </a>

            <span>
              <br />
              <b>BAHASA INDONESIA</b>
            </span>

            <Link to="/home/wemateri/materismp/mapelkelas8/materibindo8">
              <div className="tombol-mapel">
                <a
                  href="beranda-materi-bindo.html"
                  className="button-aktif-mapel hijau"
                >
                  Mulai Belajar
                </a>
              </div>
            </Link>
          </div>

          <div className="col-4-mapel">
            <a href="https://google.com">
              <img className="buku-mapel2" src={vektor} alt="Welearn" />
            </a>

            <span>
              <br />
              <b>MATEMATIKA</b>
            </span>

          <Link to="/home/wemateri/materismp/mapelkelas7/materimtk">
            <div className="tombol-mapel">
              <a
                href="beranda-materi-mtk.html"
                className="button-aktif-mapel hijau"
              >
                Mulai Belajar
              </a>
            </div>
          </Link>
          </div>

          <div className="col-4-mapel">
            <a href="https://google.com">
              <img className="buku-mapel3" src={kimia} alt="Welearn" />
            </a>

            <span>
              <br />
              <b>KIMIA</b>
            </span>

          <Link to="/home/wemateri/materismp/mapelkelas7/materikimia">
            <div className="tombol-mapel">
              <a href="https://google.com" className="button-aktif-mapel hijau">
                Mulai Belajar
              </a>
            </div>
          </Link>
          </div>

          <div className="col-4-mapel">
            <a href="https://google.com">
              <img className="buku-mapel4" src={fisika} alt="Welearn" />
            </a>

            <span>
              <br />
              <b>FISIKA</b>
            </span>

          <Link to="/home/wemateri/materismp/mapelkelas7/materifisika">
            <div className="tombol-mapel">
              <a href="https://google.com" className="button-aktif-mapel hijau">
                Mulai Belajar
              </a>
            </div>
          </Link>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5DC254"
            fill-opacity="0.28"
            d="M0,256L60,213.3C120,171,240,85,360,90.7C480,96,600,192,720,229.3C840,267,960,245,1080,208C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default MapelKelas8;
