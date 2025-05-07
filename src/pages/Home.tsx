import git_logo from "../assets/git_logo.png";
import linkedin_logo from "../assets/linkedin_logo.png";
import { Link } from "react-router-dom";
import RailTimeline from "../components/RoadmapTimeline";

function Home() {
  return (
    <div className="flex flex-col flex-1 mx-auto">
      {/* Content block */}
      <div className="mt-30 flex flex-col md:flex-row">
        {/* Hero Section */}
        <div className="flex flex-col">
          <h1>&lt;Barrett Brown / &gt;</h1>
          <p className="ml-10 mt-5 font-fira font-[20px] max-w-150">
            Backend-focused developer building scalable systems and writing
            about the problems I create and solve along the way
          </p>
          <div className="flex flex-row gap-5 ml-10 mt-5">
            <Link
              to="https://github.com/Xavanion"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-transform hover:scale-110 focus:scale-110"
            >
              <img
                src={git_logo}
                alt="github logo"
                className="h-[2.3rem] w-auto"
              />
            </Link>
            <Link
              to="https://linkedin.com/in/barrett-brown-8a990016b"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-transform hover:scale-110 focus:scale-110"
            >
              <img
                src={linkedin_logo}
                alt="linkedin logo"
                className="h-[2.3rem] w-auto"
              />
            </Link>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <RailTimeline />
        </div>
      </div>
    </div>
  );
}
export default Home;
