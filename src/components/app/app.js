import "./app.css";
import LandDisplay from "../landDisplay";
import Nav from "../nav";
import TechDisplay from "../techDisplay";
import Portfolio from "../portfolio";
import Contact from "../contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandDisplay />
      <TechDisplay />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
