import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// pages 
import Login from './pages/Login';
import Beranda from './pages/Beranda';

// pages detail
import DetailContact from './detail-pages/DetailContact';
import "./css/style-login.css";
// import HelloWorld from "./HelloWorld";
function App() {
  // const handleclicklogin=()=>
  return (
        <Router>

      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route path="/Beranda">
          <Beranda />
        </Route>
      </Switch>

    <div className="App">
          
      <div className="background-login">
        <div id="card-title">
          <h1>LOGIN</h1>
          <p>Silahkan Login Terlebih Dahulu</p>
        </div>
      </div>
      <div className="box-login">
        <div className="box">
          <form method="post" className="form">
            <label>              <h2>Username</h2>
              <input
                id="user-email"
                className="form-content"
                type="Email"
                name="Email"
                placeholder="M a s u k k a n  U s e r n a m e"
                autoComplete="on"
                required
              />
            </label>

            <label>
              <h2>Password</h2>
              <input
                id="user-password"
                className="form-content"
                type="Password"
                name="Password"
                placeholder="M a s u k k a n  P a s s w o r d"
                autoComplete="on"
                required
              />
            </label>

            <div id="button-login">
              <button type="submit" id="submit">
                  Login
              </button>
            </div>

            <div id="button-login2">
              <button type="submit" id="submit2">
                <a href="signup.html">Belum Punya Akun ?</a>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="background-login2"></div>
    </div>
    </Router>
  );
}
export default App
//       return (
//           <div className="App">
//     <header>
//                 <div class="container">
//                     <img src="/images/welearn.jpeg" alt=""/>
//                     <ul>
//                         <li><a href="login.html"><strong>Login</strong></a></li>
//                         <li><a href="WMateri.html"><strong>WeMateri</strong></a></li>
//                         <li><a href="WSAT.html"><strong>WSAT</strong></a></li>
//                         <li><a href="jadwal-ujian.html"><strong>Jadwal</strong></a></li>
//                         <li><a href="absensi.html"><strong>Absensi</strong></a></li>
//                         <li class="active"><a href="beranda.html"><strong>Home</strong></a></li>
//                     </ul>
//                 </div>
//           </header>
    
//           <div class="banner">
//                 <div class="background-home">
//                             <div class="ini-time">
//                                   <div class="time">
//                                         <span class="hms"></span>
//                                         <span class="ampm"></span>
//                                         <br></br>
//                                         <span class="date"></span>
//                                   </div>
//                       </div>
    
//                       <img src="img/vektor2.gif"></img>
//                       <div class="berandaaa">
//                             <h1 class="h1-beranda">Learn Anytime,  <span>Anywhere</span></h1>
//                                   <h1 class="h1-beranda2"><br></br>  And <span>Accelerate Future</span></h1>
//                                         <div class="line">
//                                               <div class="garis"></div>
//                                         </div>
//                       </div>
    
    
//           <div class="wsat">
//           <div id="ini-wsat">
//                 <div class="container">
//                         <img src="img/giff12.gif"></img>
//                             <div class="text-wsat2">
//                                 <h2>Yuk kenali fitur - fitur menarik apa saja<br></br> yang ada di WeLearn ! </h2>
//                             </div>
//                             <div class="button-wsat2">
//                                   <button type="submit" class="btn-wsat2"><a href="#ini-wsat2"><strong>Yuk Simak Sekarang !</strong> </a></button>
//                               </div>
//                 </div>    
//             </div>
//           </div>
//                 </div>
//           </div>
    
//           <div class="wsat2">
//             <div id="ini-wsat2">
//                 <div class="container">
//                       <h1 class="ws">Apa sih WSAT itu ?</h1><br/>
//                         <img src="img/gbb.gif"/>
//                             <div class="text-wsat">
//                                 <h3>WSAT kepanjangan dari We - Scholastic Assesment Test</h3>
//                                 <h3>WSAT merupakan test standar untuk masuk ke Perguruan Tinggi di <br></br>luar negeri. </h3><br></br>
//                             </div>
                            
//                             <div class="button-wsat">
//                                 <button type="submit" class="btn-wsat"><a href="https://parekampunginggris.co/apa-itu-test-sat-berikut-penjelasanya/"><strong>Baca Selengkapnya</strong> </a></button>
//                             </div>
//                             <div class="text-bottom">
//                             <h2>Siapa sih yang ngga mau masuk universites ternama di luar negeri?</h2><br></br>
//                             <h3>Nah maka dari itu disini WeLearn menyediakan latihan Scholastic Assesment Test untuk <br></br> kalian yang punya rencana dan mimpi kuliah di luar negeri</h3>
//                             </div>
//                 </div>     
//             </div>
//           </div>
     
//           <div class="wsat3">
//                 <div id="ini-wsat3">
//                     <div class="container">
//                           <h1 class="ws3">WeLearn menyediakan 2 fitur menarik nih untuk sobat semuanya ! <br></br>Yaitu Fitur WLesson dan WExam</h1><br></br>
//                           <div class="box-card">
//                             <table>
//                                   <tr>
//                                         <td>
//                                               <div class="box-kls7">
//                                                     <img class="kls7" src="img/gb5.jpg"></img>
//                                                           <h1 class="text-kls">WLesson</h1>
//                                                           <h2 class="text-kls2">Di fitur ini kami menyediakan Test Potensi Skolastik ( TPS ) dan Test Potensi Akademik ( TPA  ) untuk membantu kalian masuk ke Perguruan Tinggi</h2>
//                                                           <button type="button" class="button-kls7"><a href="mata-pelajaran-kelas7.html"><strong>Selengkapnya</strong></a></button>
//                                               </div>
//                                         </td>
                            
                
//                                         <td>
//                                               <div class="box-kls8">
//                                                     <img class="kls8" src="img/gb4.jpg"></img>
//                                                           <h1 class="text-kls">WExam</h1>
//                                                           <h2 class="text-kls2">Di fitur ini kami menyediakan Try Out, Test Keterampilan serta Test Penjurusan untuk mengenal lebih dalam potensi yang kalian miliki masing-masing</h2>
//                                                           <button type="button" class="button-kls8"><a href="mata-pelajaran-kelas8.html"><strong>Selengkapnya</strong></a></button>
//                                               </div>
//                                         </td>
                
//                                   </tr>
//                             </table>
//                       </div>
//                     </div>     
//                 </div>
//               </div>
//             <div class="card2">
//                 <div class="box-beranda-welearn">
//                       <h1>Kerjakan ujian bersama WeLearn <br></br>Dapatkan soal-soal materi lengkap yang ada <br></br>di fitur kami !</h1>
//                             <div class="box-beranda1">
//                                   <img class="ujian" src="img/ujian.png"></img>
//                                   <h3 class="teks-w-ujian">W-Ujian</h3>
//                             </div>
//                             <div class="w-ujian">
//                                   <button type="button" class="button-w-ujian"><a href="ujian.html"><strong>Kerjakan Sekarang</strong></a></button>
//                             </div>
//                 </div>
//           </div>
                           
//           <div class="card3">
//                 <div class="box-beranda-welearn2">
//                       <h1>Nikmati fitur W-Fresh <br></br>sebagai refreshing agar tidak bosan <br></br>Selamat Menikmati !</h1>
//                             <div class="box-beranda2">
//                                   <img class="fresh" src="img/healing.png"></img>
//                                   <h3 class="teks-w-fresh">W-Fresh</h3>
//                             </div>
//                             <div class="w-fresh">
//                                   <button type="button" class="button-w-fresh"><a href=""><strong>Coba Sekarang</strong></a></button>
//                             </div>
//                 </div>
//           </div>
    
//           <div class="card4">
//                 <div class="box-beranda-welearn3">
//                       <h1>" Bersama <span>WeLearn</span> Belajar Menjadi <span>Cerdas,</span> <br></br> <span>Cepat,</span> dan <span>Mudah</span> "</h1>
//                 </div>
//           </div>
    
//           <div class="card6">
//                 <div class="ini-card6">
                      
//                 </div>
//           </div>
    
//           <div class="card5">
//                 <div class="ini-card5">
//                       <h1>Contact</h1>
//                       <img class="contact" src="img/welearnnn.jpeg"></img>
//                       <h3>WeLearn adalah sebuah website pendidikan <br></br>yang dibuat sebagai solusi dalam memudahkan <br/>pengguna untuk mengatasi pembelajaran <br/> jarak jauh menjadi lebih efektif, mudah, cepat <br/> dan paraktis</h3>
//                                 <div class="col-3">
//                                     <h4>Addres</h4>
//                                     <p>Surakarta, Jawa Tengah, Indonesia</p>
//                                 </div>
                    
//                                 <div class="col-3">
//                                     <h4>Email</h4>
//                                     <p>welearnforall20@gmail.com</p>
//                                 </div>
                    
//                                 <div class="col-3">
//                                     <h4>Telp/WA</h4>
//                                     <p>+62 8727 706 328</p>
//                                 </div>
//                 </div>
//           </div>
    
    
//           <footer>
//                 <a href="https://www.instagram.com/we_learn_smk2/"><img src="img/instagram.png" alt="Instagram"/></a>
//                 <a href="https://www.facebook.com"><img src="img/facebook.png" alt="Facebook"/></a>
//                 <a href="https://twitter.com/inipiiraaaaaa?s=08"><img src="img/twitter.png" alt="Twitter"/></a>
//                 <a href="https://www.linkedin.com"><img src="img/linkedin.png" alt="LinkedIn"/></a>
                
//                 <div class="container">
//                     <br/><small>Copyright 2021 @WeLearn</small>
//                 </div>
//           </footer>
    
//           <script src="time.js"></script>
    
//           </div>

//   );
// }

// export default App