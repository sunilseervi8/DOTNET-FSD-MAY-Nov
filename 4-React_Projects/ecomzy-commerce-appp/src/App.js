import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./pages/home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
