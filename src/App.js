import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import Intro from "./components/Intro/Intro";
import Talent from "./components/Talent/Talent";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background : darkMode? 'black': '',
        color : darkMode? 'white': ''
      }}
      >
      <Navbar/>
      <Intro/>
      <Talent/>
      <Experience/>
      <Projects/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
