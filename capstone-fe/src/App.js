import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserLogin from "./components/login/UserLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegister from "./components/register/Register";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/users/login" element={<UserLogin />} />
          <Route path="/users/register" element={<UserRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
