import React from 'react'
import "../css/style-materi-detail.css";

import cw from "../img/cw.jpeg"
  
function RangkumanBindo() {
  return (
      <div className="RangkumanBindo">
     <input type="checkbox" id="check"/>
            <header className="header-materi">
                        <label for="check-materi">
                              <i className="fas fa-bars" id="sidebar-btn-materi"></i>
                        </label>

                        <div className="left-area-materi">
                              <h3 className="h3-left-area">Bahasa <span className="span-left-area">Indonesia</span></h3>
                        </div>

                        <div className="right-area-materi">
                              <a href="beranda.html" className="log-out-materi">Keluar</a>
                        </div>
            </header>

    <div className="sidebar-materi">
            <center>
                  <img className="profile-img-materi" src={cw} alt="Welearn"/>
                  <h4>Siswa</h4>
            </center>
                  <ul>
                        <li className="text-decoration-materi"><a href="beranda-materi-bindo.html"><i className="fas fa-desktop"></i><span>Beranda Materi</span></a></li>
                        <li className="text-decoration-materi"><a href="materi-pembelajaran-indo.html"><i className="fas fa-book"></i><span>Materi</span></a></li>
                        <li className="text-decoration-materi"><a href="video-materi.html"><i className="fas fa-video"></i><span>Video Materi</span></a></li>
                        <li className="active-2-materi text-decoration-materi"><a href="rangkuman-materi-bindo.html"><i className="fas fa-file-word"></i><span>Rangkuman Materi</span></a></li>
                        <li className="text-decoration-materi"><a href="quiz1.html"><i className="fas fa-comment-dots"></i><span>Quiz Cepat</span></a></li>
                  </ul>
    </div>

    <div className="content-materipage">
        <div className="slider-materi">
            <div className="slides-materi">
                  <input type="radio" name="radio-btn" id="radio1"/>
                  <input type="radio" name="radio-btn" id="radio2"/>
                  <input type="radio" name="radio-btn" id="radio3"/>
                  <input type="radio" name="radio-btn" id="radio4"/>
    
    
    <div className="slide first-materi">
            <div className="slide-content">
                  <h2>BAB 1</h2>
                  <h3>Membuat Surat Lamaran Pekerjaan</h3>
                        <div className="row-materi">
                            <div className="materi-col-materi">
                                <p>(1)Surat lamaran pekerjaan merupakan surat yang berisi permohonan untuk bekerja di suatu lembaga.pada umumnya surat ini memiliki bagian bagian yang berisi identitas diri,jasa yang diberikan,
                                    pendidikan,kecakapan/keahlian serta pengalaman.Bagian bagian ini sering disebut juga kualifikasi pelamar.<br/><br/>
                                    (2)Surat lamaran kerja tergolong kedalam jenis eksposisi dan surat lamaran kerja juga bersifat formal.keformalan surat lanaran dapat ditandai dari informasi mengenai sumber awal informasi tersebut.<br/><br/>
                                    (3)Penjenisan surat lamaran<br/><br/>
                                    1.Surat lamaran kerja yang digabungkan dengan riwayat hidup(curriculum vitae).<br/>
                                    2.Surat lamaran yang dipisahkan dari riwayat hidup.<br/><br/>
                                    Didalam praktiknya,jenis yang sering dipakai adalah model terpisah.walaupun didalam pembuatannya memerlukan dua kali kerja,model ini lebih digemari oleh pelamar kerja karena suratnya tidak terlalu panjang.    
                                </p>
                             </div>
                        </div>
            </div>
    </div>

            <div className="slide-materi">
                    <div className="slide-content-materi">
                        <h2>BAB 2</h2>
                        <h3>Menikmati Cerita Sejarah Indonesia</h3>
                        <div className="row-materi">
                              <div className="materi-col-materi">
                                    <p><strong>(1)Pengertian Novel Sejarah</strong><br/>
                                    Novel sejarah adalah novel yang di dalamnya menjelaskan dan menceritakan tentang fakta kejadian masa lalu yang menjadi asal-muasal atau latar belakang terjadinya sesuatu yang memiliki nilai kesejarahan, bisa bersifat naratif atau deskriptif, dan disajikan dengan daya khayal pengetahuan yang luas dari pengarang.<br/><br/>
                                    <b>(2)Struktur Teks Cerita/Novel Sejarah</b><br/>
                                    - Pengenalan situasi cerita (eksposition, orientasi)<br/>
                                    - Pengungkapan peristiwa<br/>
                                    - Menuju konflik (rising action)<br/>
                                    - Puncak konflik (turning point, komplikasi)<br/>
                                    - Penyelesaian (Evaluasi, resolusi)<br/>
                                    - Koda<br/>          
                                    </p>
                            </div>
                        </div>
                    </div>
            </div>
    
            <div className="slide-materi">
                  <div className="slide-content-materi">
                      <h2>BAB 3</h2>
                      <h3>Memahami Isu Teknis Lewat Editorial</h3>
                      <div className="row-materi">
                            <div className="materi-col-materi">
                                <p>(1)Teks editorial adalah artikel utama yang ditulis oleh redaktur koran yang merupakan pandangan redaksi terhadap suatu peristiwa (berita) aktual (sedang menjadi sorotan), fenomenal, kontroversial (menimbulkan perbedaan pendapat). Teks editorial disebut juga tajuk rencana. Teks editorial dapat diasumsikan sebagai sikap institusi media massa terhadap peristiwa yang dibahas.<br/><br/>
                                (2)Editorial dalam suatu media massa cetak biasanya berada dalam rubrik yang sama, yakni opini. Di dalam rubrik ini terdapat editorial, artikel, dan surat pembaca. Ketiga ragam opini ini biasanya berada di bagian tengah surat kabar atau majalah.<br/><br/>
                                (3)Dilihat dari isinya, editorial yang bersifat ekspositoris itu berisi tesis (pernyataan umum), diikuti oleh beberapa argumentasi secukupnya, dan diakhiri dengan penegasan ulang atas argumentasi-argumentasi tersebut.<br/><br/>
                                (4)Struktur Teks Editorial :<br/>
                                1. Pengenalan isu<br/>
                                2. Penyampaian pendapat/argumen<br/>
                                3. Penegasan<br/>
                                </p>
                            </div> 
                      </div>
                  </div>
          </div>
    
            <div className="slide-materi">
                    <div className="slide-content-materi">
                        <h2>BAB 4</h2>
                        <h3>Menikmati Novel</h3>
                        <div className="row-materi">
                              <div className="materi-col-materi">
                                    <p><strong>(1)Menaksir Pandangan Pengarang Terhadap Kehidupan</strong><br/>
                                        1. Kehidupan pada sebuah novel sebaiknya diungkapkan pengarang dengan cara yang menarik. Menceritakan lebih spesifik, sehingga bisa diserap oleh pembaca.<br/>
                                        2. Pandangan pengarang harus lebih menonjol dalam sebuah karya. Sehingga pembaca lebih termotivasi membaca novel tersebut<br/><br/>
                                        <b>(2)Menyajikan Hasil Interpretasi Pandangan Pengarang</b><br/>
                                        - Menemukan Pandangan Pengarang dalam Novel<br/>
                                        Untuk memudahkan menemukan pandangan pengarang dalam novel dari segi aspek kehidupan yaitu sosial, keagamaan, budaya, dari pandangan pengarang. Dan tetap harus menganalisis novel yang kamu baca.<br/><br/>
                                        - Menyajikan Hasil Interpretasi Pandangan Pengarang<br/>
                                        Menuliskannya menjadi sebuah paragraph yang baik. Selain itu, kamu juga dapat mengambil kutipan-kutipan di dalam novel untuk menguatkan pandangan pengarang yang kalian temukan. 
                                    
                                    </p>
                              </div>
                        </div>
                    </div>
            </div>
    
            <div className="navigation-auto-materi">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
            </div>
    
            </div>
    
            <div className="navigation-manual-materi">
                <label for="radio1" className="manual-btn-materi"></label>
                <label for="radio2" className="manual-btn-materi"></label>
                <label for="radio3" className="manual-btn-materi"></label>
                <label for="radio4" className="manual-btn-materi"></label>
            </div>
            </div>
      </div>
      </div>
                    
  )
}

export default RangkumanBindo