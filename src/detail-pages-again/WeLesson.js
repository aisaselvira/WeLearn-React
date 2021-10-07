import React from "react";
import "../css/style-wemateri.css";

function WeLesson() {
  return (
    <div className="WeLesson">
    <h1>tes</h1>
      <header className="header-welesson">
        <div className="container-welesson">
          <img src="img/welesson-logo.jpg" />
          <ul>
            <li>
              <a href="#tps">TPS</a>
            </li>
            <li>
              <a href="#pu">Penalaran Umum</a>
            </li>
            <li>
              <a href="#pk">Pengetahuan Kuantitatif</a>
            </li>
            <li>
              <a href="#mbm">Memahami Bacaan dan Menulis</a>
            </li>
            <li>
              <a href="#tpa">TPA</a>
            </li>
            <li>
              <a href="#ve">Verbal</a>
            </li>
            <li>
              <a href="#ag">Angka</a>
            </li>
            <li>
              <a href="#lo">Logika</a>
            </li>
            <li>
              <a href="#spa">Spasial</a>
            </li>
          </ul>
          <label for="check" className="mobile-menu-welesson">
            <i className="bx bx-menu-welesson" style={{color: "#6e338e"}} ></i>
          </label>
        </div>
      </header>

      <section id="tps-welesson">
        <div className="judul-tps-welesson">
          <hr color="#0d1679" />
          <br />
          <h2 className="namatpstka-welesson">Tes Potensi Skolastik</h2>
          <br />
          <hr color="#0d1679" />
        </div>
      </section>

      <div id="all-welesson">
        <section id="pu-welesson">
          <div className="container-welesson">
            <div className="judul-pu-welesson">
              <h3>Penalaran Umum</h3>
              <p>
                <p className="judu-welesson">
                  Verbal <br />
                </p>
                <p className="jud-welesson">
                  Menguji kemampuanmu dalam hal bahasa seperti pengetahuan
                  seputar antonim, sinonim, dan lain sebagainya.
                </p>
                <p className="judu-welesson">Penalaran Matematis</p>
                <p className="jud-welesson">
                  Di sini kamu akan bertemu dengan artimetika, pola baris,
                  geometri, dan lain-lain.
                </p>
                <p className="judu-welesson">Logika</p>
                <p className="jud-welesson">
                  Logika kamu akan ditantang untuk memecahkan soal seperti
                  logika analitik dan logika kuantor.
                </p>
                <p className="judu-welesson">Pola Gambar</p>
                <p className="jud-welesson">
                  Kamu akan berhadapan dengan gambar dengan berbagai pola yang
                  harus kamu selesaikan.
                </p>
              </p>
              <label for="submit-welesson"></label>
              <input
                id="submit-welesson"
                type="submit"
                name="submit"
                value="MULAI BELAJAR"
              />
            </div>
          </div>
        </section>

        <section id="pk-welesson">
          <div className="container-welesson">
            <div className="bar-welesson">
              <div className="judul-pk-welesson">
                <h3>Pengetahuan Kuantitatif</h3>
                <p className="jud-welesson">
                  Pengetahuan kuantitatif ini mencakup soal barisan bilangan,
                  geometri, artimetika, hingga aljabar.
                </p>
                <label for="submit-welesson"></label>
                <input
                  id="submit-welesson"
                  type="submit"
                  name="submit"
                  value="MULAI BELAJAR"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="mbm-welesson">
          <div className="container-welesson">
            <div className="bar-welesson">
              <div className="judul-mbm-welesson">
                <h3>Memahami Bacaan dan Menulis</h3>
                <p className="jud-welesson">
                  Menguji kemampuan bahasa kamu. Materi ini akan fokus pada
                  “teknik” dalam bahasa Indonesia. Lewat materi ini, kamu
                  dituntut memahami isi bacaan dari suatu teks, serta mampu
                  memahami kaidah penulisan bahasa Indonesia yang baik dan
                  benar.
                </p>
                <label className="labell-welesson" for="submit"></label>
                <input
                  id="submit-welesson"
                  type="submit"
                  name="submit"
                  value="MULAI BELAJAR"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="tpa-welesson">
        <div className="judul-tpa-welesson">
          <hr color="#0d1679" />
          <br />
          <h2 className="namatpstka-welesson">Tes Kemampuan Akademik</h2>
          <br />
          <hr color="#0d1679" />
        </div>
      </section>

      <section id="ve-welesson">
        <div className="container-welesson">
          <div className="bar-welesson">
            <div className="judul-ve-welesson">
              <h3>Verbal</h3>
              <p className="jud-welesson">
                Tes verbal berfungsi untuk mengukur kecerdasan seseorang dalam
                kata-kata dan bahasa.Beberapa bentuk soal tes verbal antara lain
                sinonim (persamaan kata), antonim (lawan kata), padanan hubungan
                kata, dan pengelompokan kata.
              </p>
              <label className="labell-welesson" for="submit"></label>
              <input
                id="submit"
                type="submit"
                name="submit"
                value="MULAI BELAJAR"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ag-welesson">
        <div className="container-welesson">
          <div className="bar-welesson">
            <div className="judul-ag-welesson">
              <h3>Angka</h3>
              <p className="jud-welesson">
                Jenis psikotes kerja yang satu ini berfungsi untuk mengukur
                kecerdasan seseorang dalam bidang angka. Tes ini akan mengukur
                seberapa kamu berpikir terstruktur dan logis matematis. Beberapa
                bentuk soal tes angka antara lain aritmetik (hitungan), seri
                angka, seri huruf, logika angka, dan angka dalam cerita.
              </p>
              <label className="labell-welesson" for="submit"></label>
              <input
                id="submit-welesson"
                type="submit"
                name="submit"
                value="MULAI BELAJAR"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="lo-welesson">
        <div className="container-welesson">
          <div className="bar-welesson">
            <div className="judul-lo-welesson">
              <h3>Logika</h3>
              <p className="jud-welesson">
                Tes logika berfungsi untuk mengukur kemampuan seseorang dalam
                penalaran dan pemecahan masalah secara logis atau masuk akal.
                Biasanya, banyak orang terkecoh pada jenis soal yang satu ini.
                Beberapa bentuk soal tes logika antara lain logika umum,
                analisis pernyataan dan kesimpulan (silogisme), logika cerita),
                dan logika diagram.
              </p>
              <label className="labell-welesson" for="submit"></label>
              <input
                id="submit-welesson"
                type="submit"
                name="submit"
                value="MULAI BELAJAR"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sp-welesson">
        <div className="container-welesson">
          <div className="bar-welesson">
            <div className="judul-sp-welesson">
              <h3>Spasial</h3>
              <p className="jud-welesson">
                Tes ini berfungsi untuk mengukur daya logika ruang seseorang.
                Beberapa bentuk soal tes spasial atau gambar antara lain padanan
                hubungan gambar, seri gambar, pengelompokkan gambar, bayangan
                gambar, dan identifikasi gambar.
              </p>
              <label className="labell-welesson" for="submit"></label>
              <input
                id="submit-welesson"
                type="submit"
                name="submit"
                value="MULAI BELAJAR"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeLesson;
