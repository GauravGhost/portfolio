import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Navbar,
  Feedbacks
} from "./components";

import Homepage from "./pages/Homepage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
        <Feedbacks />
      </div>
    </BrowserRouter>
  );
};

export default App;
