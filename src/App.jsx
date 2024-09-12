import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  StarsCanvas,
} from "./components";

import { About, Contact, Experience, Feedbacks, Hero, Tech, Works } from './sections'
import PersonalProject from "./sections/PersonalProject";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <PersonalProject />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Feedbacks />
      </div>
    </BrowserRouter>
  );
};

export default App;
