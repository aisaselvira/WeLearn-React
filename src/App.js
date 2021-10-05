import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// pages
import Login from "./pages/Login";
import Beranda from "./pages/Beranda";
import Signup from "./pages/Signup";

// pages detail
import Wemateri from "./detail-pages/Wemateri";
import WSAT from "./detail-pages/WSAT";
import Jadwal from "./detail-pages/Jadwal";
import Absensi from "./detail-pages/Absensi";
import UjianHariIni from "./detail-pages/UjianHariIni";

// pages detail again
import MateriSmp from "./detail-pages-again/MateriSmp";
import MateriSma from "./detail-pages-again/MateriSma";
import WeLesson from "./detail-pages-again/WeLesson";
import WeExam from "./detail-pages-again/WeExam";


//pages detail again2
import MapelKelas7 from "./detail-pages-again-2/MapelKelas7";
import MapelKelas8 from "./detail-pages-again-2/MapelKelas8";
import MapelKelas9 from "./detail-pages-again-2/MapelKelas9";
import MapelKelas10 from "./detail-pages-again-2/MapelKelas10";
import MapelKelas11 from "./detail-pages-again-2/MapelKelas11";
import MapelKelas12 from "./detail-pages-again-2/MapelKelas12";

//pages detail again3
import MateriBIndo7 from "./detail-pages-again-3/MateriBIndo7";
import MateriBIndo8 from "./detail-pages-again-3/MateriBIndo8";
import MateriBIndo9 from "./detail-pages-again-3/MateriBIndo9";
import MateriBIndo10 from "./detail-pages-again-3/MateriBIndo10";
import MateriBIndo11 from "./detail-pages-again-3/MateriBIndo11";
import MateriBIndo12 from "./detail-pages-again-3/MateriBIndo12";

// pages css
import "./css/style-login.css";

import questions from "./js/questions";

function App() {
  
  console.log(questions);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Beranda />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/home/wemateri">
          <Wemateri />
        </Route>
        <Route exact path="/home/wemateri/materismp">
          <MateriSmp />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7">
          <MapelKelas7 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas8">
          <MapelKelas8 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas9">
          <MapelKelas9 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materibindo7">
          <MateriBIndo7 />
        </Route>
        <Route path="/home/wemateri/materismp/mapelkelas8/materibindo8">
          <MateriBIndo8 />
        </Route>
        <Route path="/home/wemateri/materismp/mapelkelas9/materibindo9">
          <MateriBIndo9 />
        </Route>
        <Route exact path="/home/wemateri/materisma">
          <MateriSma />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas10">
          <MapelKelas10 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas11">
          <MapelKelas11 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas12">
          <MapelKelas12 />
        </Route>
        <Route path="/home/wemateri/materisma/mapelkelas10/materibindo10">
          <MateriBIndo10 />
        </Route>
        <Route path="/home/wemateri/materisma/mapelkelas11/materibindo11">
          <MateriBIndo11 />
        </Route>
        <Route path="/home/wemateri/materisma/mapelkelas12/materibindo12">
          <MateriBIndo12 />
        </Route>
        <Route exact path="/home/wsat">
          <WSAT />
        </Route>
        <Route path="/home/wsat/welesson">
          <WeLesson />
        </Route>
        <Route path="/home/wsat/weexam">
          <WeExam />
        </Route>
        <Route path="/home/jadwal">
          <Jadwal />
        </Route>
        <Route path="/home/absensi">
          <Absensi />
        </Route>
        <Route path="/home/ujianhariini">
          <UjianHariIni />
        </Route>
      </Switch>
      
    </Router>
  );
}
export default App;
