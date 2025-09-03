import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Visit from "./pages/Visit"
import About from "./pages/About"
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/faith" element={<Faith />} /> */}
          {/* <Route path="/ministries" element={<Ministries />} /> */}
          {/* <Route path="/missionaries" element={<Missionaries />} /> */}
          {/* <Route path="/team" element={<Team />} /> */}
          {/* Más rutas después */}
        </Routes>
      </main>     
    
      <footer>
        <Footer />
      </footer>     
    </BrowserRouter>
  );
}

export default App;
