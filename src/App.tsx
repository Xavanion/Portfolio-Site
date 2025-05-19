import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import FooterNav from "./components/FooterNav";

function App() {
  return (
    <BrowserRouter>
      <div className="relative flex flex-col min-h-screen text-white bg-[#1E1E1E] overflow-hidden">
        {/* Noise overlay */}
        <div className="pointer-events-none absolute inset-0 z-[3] opacity-15 bg-[url('/circuit-board.svg')]" />

        {/* Animated gradient background (behind noise) */}
        <div className="pointer-events-none absolute inset-0 z-[1] opacity-60 bg-gradient-to-br from-[#1e1e1e] via-[#2a1b3d] to-[#1e1e1e] animate-gradient-x bg-[length:200%_200%]" />

        <Navbar />

        <div className="relative z-10 flex flex-col flex-1 pt-[70px] sm:pt-[60px] mx-5 sm:mx-[50px] md:mx-[75px] lg:mx-[100px] xl:mx-[300px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <FooterNav />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
