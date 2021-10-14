import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { QuizProvider } from "./contexts/quiz";

// pages
import TampilanUtama from "./pages/TampilanUtama";
import Login from "./pages/Login";
import Beranda from "./pages/Beranda";
import Signup from "./pages/Signup";
import ButtonBack from "./pages/Beranda";

// pages detail
import Wemateri from "./detail-pages/Wemateri";
import WSAT from "./detail-pages/WSAT";
import Jadwal from "./detail-pages/Jadwal";
import Absensi from "./detail-pages/Absensi";
import UjianHariIni from "./detail-pages/UjianHariIni";
import WFresh from "./detail-pages/WFresh";

// pages detail again
import MateriSmp from "./detail-pages-again/MateriSmp";
import MateriSma from "./detail-pages-again/MateriSma";
import WeLesson from "./detail-pages-again/WeLesson";
import WeExam from "./detail-pages-again/WeExam";
import Ujian from "./detail-pages-again/Ujian";
import Game from "./detail-pages-again/Game";
import GameCard from "./detail-pages-again/GameCard";


//pages detail again2
import MapelKelas7 from "./detail-pages-again-2/MapelKelas7";
import MapelKelas8 from "./detail-pages-again-2/MapelKelas8";
import MapelKelas9 from "./detail-pages-again-2/MapelKelas9";
import MapelKelas10 from "./detail-pages-again-2/MapelKelas10";
import MapelKelas11 from "./detail-pages-again-2/MapelKelas11";
import MapelKelas12 from "./detail-pages-again-2/MapelKelas12";
import TPS from "./detail-pages-again-2/TPS";
import TPA from "./detail-pages-again-2/TPA";

//pages detail again3
import MateriMtk from "./detail-pages-again-3/MateriMtk";
import MateriKimia from "./detail-pages-again-3/MateriKimia";
import MateriFisika from "./detail-pages-again-3/MateriFisika";
import MateriBIndo7 from "./detail-pages-again-3/MateriBIndo7";
import MateriBIndo8 from "./detail-pages-again-3/MateriBIndo8";
import MateriBIndo9 from "./detail-pages-again-3/MateriBIndo9";
import MateriBIndo10 from "./detail-pages-again-3/MateriBIndo10";
import MateriBIndo11 from "./detail-pages-again-3/MateriBIndo11";
import MateriBIndo12 from "./detail-pages-again-3/MateriBIndo12";
import Quiz from "./detail-pages-again-3/Quiz";

//pages detail again4
import MateriPageBindo from "./detail-pages-again-4/MateriPageBindo";
import MateriPageMtk from "./detail-pages-again-4/MateriPageMtk";
import MateriPageKimia from "./detail-pages-again-4/MateriPageKimia";
import MateriPageFisika from "./detail-pages-again-4/MateriPageFisika";
import MateriPageBindo8 from "./detail-pages-again-4/MateriPageBindo8";
import MateriPageBindo9 from "./detail-pages-again-4/MateriPageBindo9";
import MateriPageBindo10 from "./detail-pages-again-4/MateriPageBindo10";
import MateriPageBindo11 from "./detail-pages-again-4/MateriPageBindo11";
import MateriPageBindo12 from "./detail-pages-again-4/MateriPageBindo12";
import QuizBindo from "./detail-pages-again-4/QuizBindo";
import QuizMtk from "./detail-pages-again-4/QuizMtk";
import QuizKimia from "./detail-pages-again-4/QuizKimia";
import QuizBindo8 from "./detail-pages-again-4/QuizBindo";
import QuizBindo9 from "./detail-pages-again-4/QuizBindo";
import QuizBindo10 from "./detail-pages-again-4/QuizBindo";
import QuizBindo11 from "./detail-pages-again-4/QuizBindo";
import QuizBindo12 from "./detail-pages-again-4/QuizBindo";
import QuizFisika from "./detail-pages-again-4/QuizFisika";
import VideoMateriBindo from "./detail-pages-again-4/VideoMateriBindo";
import VideoMateriMtk from "./detail-pages-again-4/VideoMateriMtk";
import VideoMateriKimia from "./detail-pages-again-4/VideoMateriKimia";
import VideoMateriFisika from "./detail-pages-again-4/VideoMateriFisika";
import VideoMateriBindo8 from "./detail-pages-again-4/VideoMateriBindo8";
import VideoMateriBindo9 from "./detail-pages-again-4/VideoMateriBindo9";
import VideoMateriBindo10 from "./detail-pages-again-4/VideoMateriBindo10";
import VideoMateriBindo11 from "./detail-pages-again-4/VideoMateriBindo11";
import VideoMateriBindo12 from "./detail-pages-again-4/VideoMateriBindo12";
import RangkumanMtkk from "./detail-pages-again-4/RangkumanMtkk";
import RangkumanKimia from "./detail-pages-again-4/RangkumanKimia";
import RangkumanBindo from "./detail-pages-again-4/RangkumanBindo";
import RangkumanBindo8 from "./detail-pages-again-4/RangkumanBindo8";
import RangkumanBindo9 from "./detail-pages-again-4/RangkumanBindo9";
import RangkumanBindo10 from "./detail-pages-again-4/RangkumanBindo10";
import RangkumanBindo11 from "./detail-pages-again-4/RangkumanBindo11";
import RangkumanBindo12 from "./detail-pages-again-4/RangkumanBindo12";
import RangkumanFisika from "./detail-pages-again-4/RangkumanFisika";

// pages css
import "./css/style-login.css";

import questions from "./js/questions";

function App() {
  
  console.log(questions);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TampilanUtama />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/home">
          <Beranda />
        </Route>
        <Route exact path="/signup">
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
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materibindo7/materipagebindo">
          <MateriPageBindo />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materibindo7/videomateribindo">
          <VideoMateriBindo />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materibindo7/rangkumanbindo">
          <RangkumanBindo />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materibindo7/quizbindo">
          <QuizBindo />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materimtk">
          <MateriMtk />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materimtk/materipagemtk">
          <MateriPageMtk />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materimtk/videomaterimtk">
          <VideoMateriMtk />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materimtk/rangkumanmtk">
          <RangkumanMtkk />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materimtk/quizmtk">
          <QuizMtk />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materikimia">
          <MateriKimia />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materikimia/materipagekimia">
          <MateriPageKimia />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materikimia/videomaterikimia">
          <VideoMateriKimia />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materikimia/rangkumankimia">
          <RangkumanKimia />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materikimia/quizkimia">
          <QuizKimia />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materifisika">
          <MateriFisika />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materifisika/materipagefisika">
          <MateriPageFisika />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materifisika/videomaterifisika">
          <VideoMateriFisika />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materifisika/rangkumanfisika">
          <RangkumanFisika />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas7/materifisika/quizfisika">
          <QuizFisika />
        </Route>
        <Route exact path="/home">
          <ButtonBack />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas8/materibindo8">
          <MateriBIndo8 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas8/materibindo8/materipagebindo8">
          <MateriPageBindo8 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas8/materibindo8/videomateribindo8">
          <VideoMateriBindo8 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas8/materibindo8/rangkumanbindo8">
          <RangkumanBindo8 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas8/materibindo8/quizbindo8">
          <QuizBindo8 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas9/materibindo9">
          <MateriBIndo9 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas9/materibindo9/materipagebindo9">
          <MateriPageBindo9 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas9/materibindo9/videomateribindo9">
          <VideoMateriBindo9 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas9/materibindo9/rangkumanbindo9">
          <RangkumanBindo9 />
        </Route>
        <Route exact path="/home/wemateri/materismp/mapelkelas9/materibindo9/quizbindo9">
          <QuizBindo9 />
        </Route>
        <Route exact path="/home/wemateri/materisma">
          <MateriSma />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas10">
          <MapelKelas10 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas10/materibindo10">
          <MateriBIndo10 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas10/materibindo10/materipagebindo10">
          <MateriPageBindo10 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas10/materibindo10/videomateribindo10">
          <VideoMateriBindo10 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas10/materibindo10/rangkumanbindo10">
          <RangkumanBindo10 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas10/materibindo10/quizbindo10">
          <QuizBindo10 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas11">
          <MapelKelas11 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas11/materibindo11/materipagebindo11">
          <MateriPageBindo11 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas11/materibindo11/videomateribindo11">
          <VideoMateriBindo11 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas11/materibindo11/rangkumanbindo11">
          <RangkumanBindo11 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas11/materibindo11/quizbindo11">
          <QuizBindo11 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas12">
          <MapelKelas12 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas12/materibindo12/materipagebindo12">
          <MateriPageBindo12 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas12/materibindo12/videomateribindo12">
          <VideoMateriBindo12 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas12/materibindo12/rangkumanbindo12">
          <RangkumanBindo12 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas12/materibindo12/quizbindo12">
          <QuizBindo12 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas11/materibindo11">
          <MateriBIndo11 />
        </Route>
        <Route exact path="/home/wemateri/materisma/mapelkelas12/materibindo12">
          <MateriBIndo12 />
        </Route>
        <Route exact path="/home/wsat">
          <WSAT />
        </Route>
        <Route exact path="/home/wsat/welesson">
          <WeLesson />
        </Route>
        <Route exact path="/home/wsat/weexam">
          <WeExam />
        </Route>
        <Route exact path="/home/wsat/weexam/tps">
          <TPS />
        </Route>
        <Route exact path="/home/wsat/weexam/tps/tryouttps">
          <Quiz />
        </Route>
        <Route exact path="/home/wsat/weexam/tpa">
          <TPA />
        </Route>
        <Route exact path="/home/jadwal">
          <Jadwal />
        </Route>
        <Route exact path="/home/absensi">
          <Absensi />
        </Route>
        <Route exact path="/home/ujianhariini">
          <UjianHariIni />
        </Route>
        <Route exact path="/home/ujianhariini/ujian">
          <Ujian />
        </Route>
        <Route exact path="/home/wfresh">
          <WFresh />
        </Route>
        <Route exact path="/home/wfresh/game">
          <Game />
        </Route>
        <Route exact path="/home/wfresh/gamecard">
          <GameCard />
        </Route>
        <QuizProvider>
          <Quiz />
        </QuizProvider>
      </Switch>
      
    </Router>

    
  );
}
export default App;
