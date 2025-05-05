import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen overflow-y-hidden bg-[#14181d] text-white">
        {" "}
        {/* Used to wrap entire webpage */}
        <Navbar />
        <div className="flex flex-col flex-1 pt-[70px] sm:pt-[60px] overflow-hidden">
          {" "}
          {/* Used to wrap non-navbar content to allow easily swapping main content of page*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
