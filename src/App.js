import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import Intro from "./components/Intro/Intro";
import Talent from "./components/Talent/Talent";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Talent/>
    </div>
  );
}

export default App;
