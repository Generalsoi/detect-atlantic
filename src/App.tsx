import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Homepage } from "./pages/Homepage";
import { Solutions } from "./pages/Solutions";
import { Learn } from "./pages/Learn";
import { Team } from "./pages/Team";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<Solutions />} path="/solutions" />
      <Route element={<Learn />} path="/learn" />
      <Route element={<Team />} path="/team" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
};

export default App;
