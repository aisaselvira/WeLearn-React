import React from 'react'
import "../css/style-welesson.css";

function WeLesson() {
  return (
    <div className="WeLesson">
    <header className="headerlesson">
    <div className="container">
        <img src ="img/welesson-logo.jpg"/>
            <ul>
                <li><a href="#tps">TPS</a></li>
                <li><a href="#pu">Penalaran Umum</a></li>
                <li><a href="#pk">Pengetahuan Kuantitatif</a></li>
                <li><a href="#mbm">Memahami Bacaan dan Menulis</a></li>
                <li><a href="#tpa">TPA</a></li>
                <li><a href="#ve">Verbal</a></li>
                <li><a href="#ag">Angka</a></li>
                <li><a href="#lo">Logika</a></li>
                <li><a href="#spa">Spasial</a></li>
            </ul>
                <label for="check" className="mobile-menu"><i className='bx bx-menu' style='color:#6e338e'  ></i></label>
        </div>
</header>
    

    <section id="tps">
        <div className="judul-tps">
            <hr color="#0d1679"/><br/>
            <h2 className="namatpstka">Tes Potensi Skolastik</h2><br/>
            <hr color="#0d1679"/>
        </div>  
    </section>
    
    <div id="all">
        <section id="pu">
            <div className="container">
                <div className="judul-pu">
                    <h3>Penalaran Umum</h3>
                    <p>
                       <p className="judu">Verbal <br/></p>
                       <p className="jud">Menguji kemampuanmu dalam hal bahasa seperti pengetahuan seputar antonim, sinonim, dan lain sebagainya.</p>
                      <p className="judu">Penalaran Matematis</p>
                       <p className="jud">Di sini kamu akan bertemu dengan artimetika, pola baris, geometri, dan lain-lain.</p>
                       <p className="judu">Logika</p>
                       <p className="jud">Logika kamu akan ditantang untuk memecahkan soal seperti logika analitik dan logika kuantor.</p>
                      <p className="judu">Pola Gambar</p>
                       <p className="jud">Kamu akan berhadapan dengan gambar dengan berbagai pola yang harus kamu selesaikan.</p>
                    </p>
                    <label for="submit"></label>
                    <input id="submit" type="submit" name="submit" value="MULAI BELAJAR"/>
                </div>
            </div>
            
        </section>
    
        <section id="pk">
            <div className="container">
                <div className="bar">
                    <div className="judul-pk">
                        <h3>Pengetahuan Kuantitatif</h3>
                        <p className="jud">Pengetahuan kuantitatif ini mencakup soal barisan bilangan, geometri, artimetika, hingga aljabar.</p>
                        <label for="submit"></label>
                        <input id="submit" type="submit" name="submit" value="MULAI BELAJAR"/>
                    </div>
                </div>
            </div>
        </section>
    
        <section id="mbm">
            <div className="container">
                <div className="bar">
                    <div className="judul-mbm">
                        <h3>Memahami Bacaan dan Menulis</h3>
                        <p className="jud">Menguji kemampuan bahasa kamu. Materi ini akan fokus pada “teknik” dalam bahasa Indonesia. Lewat materi ini, kamu dituntut memahami isi bacaan dari suatu teks, serta mampu memahami kaidah penulisan bahasa Indonesia yang baik dan benar.</p>
                        <label for="submit"></label>
                    <input id="submit" type="submit" name="submit" value="MULAI BELAJAR"/>
                    </div>
                </div>
            </div>
        </section>

        

    </div>

    <section id="tpa">
        <div className="judul-tpa">
                <hr color="#0d1679"/><br/>
                <h2 className="namatpstka">Tes Kemampuan Akademik</h2><br/>
                <hr color="#0d1679"/>
            
        </div>  
    </section>

    <section id="ve">
        <div className="container">
            <div className="bar">
                <div className="judul-ve">
                    <h3>Verbal</h3>
                    <p className="jud">Tes verbal berfungsi untuk mengukur kecerdasan seseorang dalam kata-kata dan bahasa.Beberapa bentuk soal tes verbal antara lain sinonim (persamaan kata), antonim (lawan kata), padanan hubungan kata, dan pengelompokan kata.</p>
                    <label for="submit"></label>
                    <input id="submit" type="submit" name="submit" value="MULAI BELAJAR"/>
                </div>
            </div>
        </div>
    </section>

    <section id="ag">
        <div className="container">
            <div className="bar">
                <div className="judul-ag">
                    <h3>Angka</h3>
                    <p className="jud">Jenis psikotes kerja yang satu ini berfungsi untuk mengukur kecerdasan seseorang dalam bidang angka.
                        Tes ini akan mengukur seberapa kamu berpikir terstruktur dan logis matematis.
                        Beberapa bentuk soal tes angka antara lain aritmetik (hitungan), seri angka, seri huruf, logika angka, dan angka dalam cerita.</p>
                        <label for="submit"></label>
                        <input id="submit" type="submit" name="submit" value="MULAI BELAJAR"/>
                    </div>
            </div>
        </div>
    </section>

    <section id="lo">
        <div className="container">
            <div className="bar">
                <div className="judul-lo">
                    <h3>Logika</h3>
                    <p className="jud">Tes logika berfungsi untuk mengukur kemampuan seseorang dalam penalaran dan pemecahan masalah secara logis atau masuk akal.

                            Biasanya, banyak orang terkecoh pada jenis soal yang satu ini.
                            
                            Beberapa bentuk soal tes logika antara lain logika umum, analisis pernyataan dan kesimpulan (silogisme), logika cerita), dan logika diagram.</p>
                            <label for="submit"></label>
                            <input id="submit" type="submit" name="submit" value="MULAI BELAJAR"/>
                        </div>
            </div>
        </div>
    </section>

    <section id="sp">
        <div className="container">
            <div className="bar">
                <div className="judul-sp">
                    <h3>Spasial</h3>
                    <p className="jud">Tes ini berfungsi untuk mengukur daya logika ruang seseorang.

                            Beberapa bentuk soal tes spasial atau gambar antara lain padanan hubungan gambar, seri gambar, pengelompokkan gambar, bayangan gambar, dan identifikasi gambar.</p>
                            <label for="submit"></label>
                            <input id="submit" type="submit" name="submit" value="MULAI BELAJAR"/>
                        </div>
            </div>
        </div>
    </section>
</div>

  )
}

export default WeLesson