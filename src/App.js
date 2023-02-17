import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import Intro from "./components/Intro/Intro";
import Talent from "./components/Talent/Talent";
import Experience from "./components/Experience/Experience";
// import Projects from "./components/Projects/Projects";
import Dummy from "./components/Dummy/Dummy";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Talent/>
      <Experience/>
      {/* <Dummy/> */}
      {/* <Projects/> */}
    </div>
  );
}

export default App;
