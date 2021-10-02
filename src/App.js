import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// pages
import Login from "./pages/Login";
import Beranda from "./pages/Beranda";

// pages detail
// import DetailContact from "./detail-pages/DetailContact";

// pages css
import "./css/style-login.css";

function App() {
  const handleclicklogin = () => {
    console.log("tes");
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/Home">
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
                    login
                  </button>
                </div>
              </Link>

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
export default App;
