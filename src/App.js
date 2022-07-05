import Login from "./pages/login";
import Home from "./pages/home";
import ProtectedRoute from "./pages/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function App() {
  const [auth, setAuth] = useState(false);
  const [cookies, setCookie] = useCookies(["username"]);
  useEffect(() => {
    const { user } = cookies;
    if (user.username === "foo" && user.password === "bar") {
      setAuth(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login setAuth={setAuth} auth={auth}></Login>}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute auth={auth}>
              <Home auth={auth} setAuth={setAuth} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
