import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Show from "./pages/Show";
import stocks from "./data";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home stocks={stocks} />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Show stocks={stocks} />} />
      </Routes>
    </div>
  );
}

export default App;
