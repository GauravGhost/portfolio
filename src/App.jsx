import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
} from "./components";

import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Homepage />
      </div>
    </BrowserRouter>
  );
};

export default App;
