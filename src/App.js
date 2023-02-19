import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import Intro from "./components/Intro/Intro";
import Talent from "./components/Talent/Talent";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import Dummy from "./components/Dummy/Dummy";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Talent/>
      <Experience/>
      {/* <Dummy/> */}
      <Projects/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
