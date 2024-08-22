import About from "./components/About";
import Contact from "./components/Contact";
import Design from "./components/Design";
import Experience from "./components/Experience";
import GithubData from "./components/GithubDatas";
import Home from "./components/Home";
import LoadingPage from "./components/LoadingPage";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import useReady from "./components/useReady";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const { ready } = useReady(2000);
  return (
    <div>
      {
        ready !== true ? <LoadingPage /> :
          <div >
            <NavBar />
            <Home />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <GithubData />
            <Contact />
            <SocialLinks />
            {/* <Design /> */}
            <AnimatedCursor
              innerSize={20}
              outerSize={12}
              color='39, 180, 161'
              outerAlpha={0}
              innerScale={0.7}
              outerScale={4}
              clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
              ]}
              outerStyle={{ border: '5px solid #075985', color: "#075985" }}
              trailingSpeed={10}
            //showSystemCursir={false}

            />
          </div>
      }
    </div>
  );
}

export default App;
