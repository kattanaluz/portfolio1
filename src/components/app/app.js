import "./app.css";
import LandDisplay from "../landDisplay";
import Nav from "../nav";
import About from "../about";
import Portfolio from "../portfolio";
import Contact from "../contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandDisplay />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
