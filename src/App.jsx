import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Visit from "./pages/Visit"
import About from "./pages/About"
import Footer from "./components/Footer";
import "./App.css";
import Events from "./pages/Events";
import Faith from "./pages/Faith";
import Contact from "./pages/Contact";
import Ministries from "./pages/Ministries";

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
          <Route path="/faith" element={<Faith />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ministries" element={<Ministries />} />
        </Routes>
      </main>     
    
      <footer>
        <Footer />
      </footer>     
    </BrowserRouter>
  );
}

export default App;
