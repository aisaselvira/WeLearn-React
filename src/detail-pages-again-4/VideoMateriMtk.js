import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-materi-detail.css";

import cw from "../img/cw.jpeg"
import videomateri from "../video/bab2.mp4"
import videomateri1 from "../video/bab1.mp4"
  
function VideoMateriMtk() {
  return (
      <div className="VideoMateriBindo">
     <input type="checkbox" id="check-materi"/>
            <header className="header-materi">
                  <label className="label-materi" for="check">
                        <i className="fas fa-bars" id="sidebar-btn-materi"></i>
                  </label>

                <div className="left-area-materi">
                  <h3 className="h3-left-area">MATEMATIKA
                        <Link to="/home">
                              <a href="beranda.html" class="log-out-materi">Keluar</a>
                        </Link>
                  </h3>
                </div>
            </header>

      <div className="sidebar-materi">
            <center>
                  <img className="profile-img-materi" src={cw} alt="Welearn"/>
                  <h4>Siswa</h4>
            </center>
            <ul>
                  <li className="text-decoration-materi">
                        <Link to="/home/wemateri/materismp/mapelkelas7/materimtk">
                              <a href="beranda-materi-bindo.html"><i className="fas fa-desktop"></i><span>Beranda Materi</span></a>
                        </Link>
                  </li>
                  <li className="text-decoration-materi">
                       <Link to="/home/wemateri/materismp/mapelkelas7/materimtk/materipagemtk">
                            <a href="materi-pembelajaran-indo.html"><i className="fas fa-book"></i><span>Materi</span></a>
                        </Link>
                  </li>
                  <li className="active-2-materi text-decoration-materi">
                        <Link to="/home/wemateri/materismp/mapelkelas7/materimtk/videomaterimtk">
                              <a href="video-materi.html"><i className="fas fa-video"></i><span>Video Materi</span></a>
                        </Link>
                  </li>
                  <li className="text-decoration-materi">
                        <Link to="/home/wemateri/materismp/mapelkelas7/materimtk/rangkumanmtk">
                              <a href="rangkuman-materi-Mtk.html"><i className="fas fa-file-word"></i><span>Rangkuman Materi</span></a>
                        </Link>
                  </li>
                  <li className="text-decoration-materi">
                        <Link to="/home/wemateri/materismp/mapelkelas7/materimtk/quizmtk">
                              <a href="quiz1.html"><i className="fas fa-comment-dots"></i><span>Quiz Cepat</span></a>
                        </Link>
                  </li>
            </ul>
      </div>

      <div className="content-video-materi">
            <h1 className="teks-video-materi">Seputar Video Materi Matematika</h1><br/>

            <div className="card3-materi">
                  <table className="table-video-materi">
                        <tr>
                              <td>
                                    <div className="box-video-materi">
                                          <video className="videomateriindo" controls>
                                                 <source src={videomateri1} type="video/mp4"/><br/>
                                          </video>
                                          <button type="button" className="button-vid-materi"><strong>Video Materi</strong></button>
                                          <h1 className="text-vid-materi">BAB 1</h1>
                                          <h2 className="text-vid-materi2">Bilangan</h2>
                                    </div>
                              </td>

                              <td>
                                    <div className="box-video-materi">
                                          <video className="videomateriindo" controls>
                                                <source src={videomateri} type="video/mp4"/><br/>
                                          </video>
                                          <button type="button" className="button-vid-materi"><strong>Video Materi</strong></button>
                                          <h1 className="text-vid-materi">BAB 2</h1>
                                          <h2 className="text-vid-materi2">Bentuk Aljabar</h2>
                                    </div>
                              </td>
                        </tr>
                  </table>
            </div>
      </div>
</div>
  )
}

export default VideoMateriMtk