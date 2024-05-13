import "./App.css";
import About from "./component/About/About";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Programs from "./component/Programs/Programs";
import Title from "./component/Title/Title";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What We Offer" subTitle="Our Programs" />
        <Programs />
        <About />
      </div>
    </div>
  );
}

export default App;
