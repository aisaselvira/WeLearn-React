import React from 'react'
// import {useParams} from 'react-router-dom'

function Login() {
  // let {id} = useParams();
  return (
    <div className="Login">
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
              <h2 className="form-signup-email">Email</h2>
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
              <h2 className="form-signup-password">Password</h2>
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
                <a href="beranda.html">LOGIN</a>
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
  );
}
export default Login