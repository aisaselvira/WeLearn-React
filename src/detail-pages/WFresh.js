import React from 'react'
import "../css/style-wfresh.css";

import web1 from "../img/web1.jpeg"
import web2 from "../img/web2.jpeg"
import web3 from "../img/web3.jpeg"
import web4 from "../img/web4.jpeg"
import web5 from "../img/web5.jpeg"
import web6 from "../img/web6.jpeg"
import web7 from "../img/web1.jpeg"
import web8 from "../img/web3.jpeg"
import maudy from "../video/maudy.mp3"
import maudy2 from "../video/maudy.mp3"
import maudy3 from "../video/maudy.mp3"
import videomaudy from "../video/maudyvid.mp4"



function WFresh() {
  return (
    <div className="WFresh">
      <div id="header-wfresh">W-Fresh</div>
        <div id = "kiri-wfresh">
            <h2 className="h2-kiri-wfresh">Podcast</h2>
                  <div id="all-col-wfresh">
                        <div id="col-wfresh">
                              <audio className="audio-wfresh" controls>
                                    <source src={maudy} type="audio/mpeg"/>
                              </audio>
                        </div>
                
                        <div id="col" >
                              <audio className="audio-wfresh" controls>
                                    <source src={maudy2} type="audio/mpeg"/>
                              </audio>
                        </div>
                
                        <div id="col" >
                              <audio className="audio-wfresh" controls>
                                    <source src={maudy3} type="audio/mpeg"/>
                              </audio>
                        </div>
                  </div>
                    
                  <div id = "kanan-wfresh">
                        <h2 id="video-wfresh">Video</h2>
                              <div id="all2-col-wfresh">
                                    <div id="col1-wfresh">
                                          <video className="video-wfresh1" controls>
                                                <source src={videomaudy} type="video/mp4"/>
                                          </video>
                                    </div>
                              </div>
                  </div>
        </div>
   
            <br/>
            <h3 className="h3-wfresh">Work Hard WiLL Never Betray You</h3>
            <hr/>
            <h3 className="h3-wfresh" >Work Hard WiLL Never Betray You</h3>
            <hr/>
            
            <br/>
              
      <hr/>
      <h1 className="h1-wfresh-webinar">Jadwal Webinar</h1>
      <hr/>

      <h3 className="hari-wfresh">Senin, 20 Agustus 2021</h3>
      <div className="semuaaa-wfresh">
      <div className="nya-wfresh">
            <div className="card-wfresh">
                  <a href=""><img className="webinar1" src={web1} alt="Welearn"/></a><br/>        
            </div>
            <p className="card-text-wfresh">Canon Live Webinar</p>
      </div>

      <div className="nya-wfresh">
                  <div className="card-wfresh">
                        <a href=""><img className="webinar2" src={web2} alt="Welearn"/></a><br/>        
                  </div>
                  <p className="card-text-wfresh">Webinar Strategi Pemasaran Online</p>
            </div>

            <div className="nya-wfresh">
                  <div className="card-wfresh">
                              <a href=""><img className="webinar3" src={web3} alt="Welearn"/></a><br/>        
                  </div>
                  <p className="card-text-wfresh">Art Show Case</p>
                  </div>

                  <div className="nya-wfresh">
                        <div className="card-wfresh">
                              <a href=""><img className="webinar4" src={web4} alt="Welearn"/></a><br/>        
                        </div>
                        <p className="card-text-wfresh">How To Build Your Business</p>
                  </div>

                  </div>          

              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              
            <h3 className="hari-wfresh">Senin, 20 Agustus 2021</h3>
            <div className="semuaaa-wfresh">
            <div className="nya-wfresh">
                  <div className="card-wfresh">
                        <a href=""><img className="webinar5" src={web5} alt="Welearn"/></a><br/>        
                  </div>
                  <p className="card-text-wfresh">Seminar Technopreneurship</p>
            </div>

            <div className="nya-wfresh">
                        <div className="card-wfresh">
                              <a href=""><img className="webinar6" src={web6} alt="Welearn"/></a><br/>        
                        </div>
                        <p className="card-text-wfresh">Mastering Entrepreneurial Strategy</p>
                  </div>

                  <div className="nya-wfresh">
                        <div className="card-wfresh">
                                <a href=""><img className="webinar7" src={web7} alt="Welearn"/></a><br/>
                        </div>
                        <p className="card-text-wfresh">Canon Live Webinar</p>
                        </div>

                        <div className="nya-wfresh">
                              <div className="card-wfresh">
                                 <a href=""><img className="webinar8" src={web8} alt="Welearn"/></a><br/>        
                              </div>
                              <p className="card-text-wfresh">Art Show Case</p>
                        </div>
            
</div>      
</div>

  )
}

export default WFresh