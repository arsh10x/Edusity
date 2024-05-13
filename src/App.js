import "./App.css";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Programs from "./component/Programs/Programs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Programs />
      </div>
    </div>
  );
}

export default App;
