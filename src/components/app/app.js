import "./app.css";
import LandDisplay from "../landDisplay";
import Nav from "../nav";
import TechDisplay from "../techDisplay";
import Portfolio from "../portfolio";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandDisplay />
      <TechDisplay />
      <Portfolio />
    </div>
  );
}

export default App;
