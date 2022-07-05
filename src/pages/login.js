import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./../css/style.css";
import { useCookies } from "react-cookie";
const Login = ({ setAuth, auth }) => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies("user");
  useEffect(() => {
    const { user } = cookies;
    if (user.username === "foo" && user.password === "bar") setAuth(true);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "foo" && password === "bar") {
      setAuth(true);
      setCookie("user", JSON.stringify({ username, password }));
    }
  };
  console.log(auth);
  if (!auth) {
    return (
      <>
        <div className="container">
          <div className="login__container">
            <div className="login__container__left">
              <div className="heading__primary heading__primary--blue u__margin--medium">
                Login
              </div>
              <form className="form" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    id="username"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Username"
                    required
                  />
                  <label htmlFor="username" className="form__label">
                    Username
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="password" className="form__label">
                    Password
                  </label>
                </div>
                <div className="form__group">
                  <button className="btn btn--blue" type="submit">
                    Next step &rarr;
                  </button>
                </div>
              </form>
            </div>
            <div className="login__container__right"></div>
          </div>
        </div>
      </>
    );
  }
  if (auth) {
    return <Navigate from="/login" to="/" />;
  }
};
export default Login;
