import About from "./About";
import Profile from "./Profile";
import Nav from "./Nav";
import Expereince from "./Experience/Experience";
import Project from "./Projects/Project";
import Contact from "./Contact";
import Footer from "./Footer";
import "../styles/mediaQueries.css"

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Profile />
      <About />
      <Expereince />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
