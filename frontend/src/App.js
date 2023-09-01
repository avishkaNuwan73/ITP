import "./App.css";
import Login from "./pages/login/index.js";
import Register from "./pages/register/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPasswordEmail from "./pages/forgot password/index1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password1" element={<ForgotPasswordEmail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
