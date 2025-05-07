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
      <div className="flex flex-col min-h-screen bg-[#1E1E1E] text-white">
        {" "}
        {/* Used to wrap entire webpage */}
        <Navbar />
        <div className="flex flex-col flex-1 pt-[70px] sm:pt-[60px] overflow-hidden mx-5 sm:mx-[50px] md:mx-[75px] lg:mx-[100px] xl:mx-[300px]">
          {" "}
          {/* Used to wrap non-navbar content to allow easily swapping main content of page*/}
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
