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

// pages css
import "./css/style-login.css";

function App() {
  const handleclicklogin = () => {
    console.log("tes");
  };
  const handleclicksignup = () => {
    console.log("tes2");
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/home">
          <Beranda />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/home/wemateri">
          <Wemateri />
        </Route>
        <Route path="/home/wsat">
          <WSAT />
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
              <label>
                {" "}
                <h2 className="form-login-username">Username</h2>
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
                <h2 className="form-login-username">Password</h2>
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

              <Link to="/home">
                <div id="button-login">
                  <button type="submit" id="submit" onClick={handleclicklogin}>
                    <a href="">Login</a>
                  </button>
                </div>
              </Link>

              <Link to="/signup">
              <div id="button-login2">
                <button type="submit" id="submit2" onClick={handleclicksignup}>
                  <a href="signup.html">Belum Punya Akun ?</a>
                </button>
              </div>
              </Link>

            </form>
          </div>
        </div>
        <div className="background-login2"></div>
      </div>
    </Router>
  );
}
export default App;
