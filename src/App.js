import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import LoadingPage from "./components/LoadingPage";
import NavBar from "./components/NavBar";
//import NewNavBar from "./components/newnav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import useReady from "./components/useReady";

function App() {
  const {ready} = useReady(2000);
  return (
    <div>
  {
    ready!==true?<LoadingPage/>:
    <div >
    <NavBar />
    {/* <NewNavBar/> */}
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <SocialLinks />
    </div>
  }
  </div>
    );
}

export default App;
