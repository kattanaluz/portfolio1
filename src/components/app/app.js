import "./app.css";
import LandDisplay from "../landDisplay";
import Nav from "../nav";
import TechDisplay from "../techDisplay";
import Portfolio from "../portfolio";
import About from "../about";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandDisplay />
      <About />
      <TechDisplay />
      <Portfolio />
    </div>
  );
}

export default App;
