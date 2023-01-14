import About from "./components/About";
import Contact from "./components/Contact";
import GithubData from "./components/GithubDatas";
import Home from "./components/Home";
import LoadingPage from "./components/LoadingPage";
import NavBar from "./components/NavBar";
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
    <Home />
    <About />
    <Skills />
    <Projects />
    <GithubData/>
    <Contact />
    <SocialLinks />
    </div>
  }
  </div>
  );
}

export default App;
