import "./app.css";
import LandDisplay from "../landDisplay";
import Nav from "../nav";
import TechDisplay from "../techDisplay";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandDisplay />
      <TechDisplay />
    </div>
  );
}

export default App;
