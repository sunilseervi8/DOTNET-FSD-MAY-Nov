import "./App.css";
import NavBar from "./components/header/HeaderComponent";
import { Outlet, Routes, Route } from "react-router-dom";
import DummyCat from "./components/Dummy/dummyCategory";
import Registration from "./components/UserAuthentication/Registration";
import Login from "./components/UserAuthentication/login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Routes>
        <Route path="/:category" element={<DummyCat />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
