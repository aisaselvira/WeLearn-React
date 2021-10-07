import React from 'react'
import "../css/style-materi-detail.css";

import cw from "../img/cw.jpeg"
  
function VideoMateriBindo() {
  return (
      <div className="VideoMateriBindo">
     <input type="checkbox" id="check-materi"/>
            <header className="header-materi">
                  <label className="label-materi" for="check">
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
                  <li className="active-2-materi text-decoration-materi"><a href="video-materi.html"><i className="fas fa-video"></i><span>Video Materi</span></a></li>
                  <li className="text-decoration-materi"><a href="rangkuman-materi-bindo.html"><i className="fas fa-file-word"></i><span>Rangkuman Materi</span></a></li>
                  <li className="text-decoration-materi"><a href="quiz1.html"><i className="fas fa-comment-dots"></i><span>Quiz Cepat</span></a></li>
            </ul>
      </div>

      <div className="content-video-materi">
            <h1 className="teks-video-materi">Seputar Video Materi Bahasa Indonesia</h1><br/>

            <div className="card3-materi">
                  <table>
                        <tr>
                              <td>
                                    <div className="box-video-materi">
                                          <video controls>
                                                <source src="video/videomateri.mp4" type="video/mp4"/><br/>
                                          </video>
                                          <button type="button" className="button-vid-mat"><strong>Video Materi</strong></button>
                                          <h1 className="text-vid-mat">BAB 1</h1>
                                          <h2 className="text-vid-mat2">Langkah - Langkah Membuat Surat Lamaran Pekerjaan</h2>
                                    </div>
                              </td>

                              <td>
                                    <div className="box-video-materi">
                                          <video controls>
                                                <source src="video/videomateri.mp4" type="video/mp4"/><br/>
                                          </video>
                                          <button type="button" className="button-vid-mat"><strong>Video Materi</strong></button>
                                          <h1 className="text-vid-mat">BAB 2</h1>
                                          <h2 className="text-vid-mat2">Menikmati Cerita Sejarah Indonesia</h2>
                                    </div>
                              </td>
                        </tr>
                  </table>
            </div>
      </div>
</div>
  )
}

export default VideoMateriBindo