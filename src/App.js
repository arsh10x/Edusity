import { useState } from "react";
import "./App.css";
import About from "./component/About/About";
import Campus from "./component/Campus/Campus";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Programs from "./component/Programs/Programs";
import Testimonials from "./component/Testimonials/Testimonials";
import Title from "./component/Title/Title";
import VideoPlayer from "./component/VideoPlayer/VideoPlayer";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What We Offer" subTitle="Our Programs" />
        <Programs />
        <About setShow={setShow} />
        <Title title="Campus Photos" subTitle="Gallery" />
        <Campus />
        <Title title="TESTIMONIALS" subTitle="What Students Say's" />
        <Testimonials />
        <Title title="Get in Touch" subTitle="Contact us" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer setShow={setShow} show={show} />
    </div>
  );
}

export default App;
