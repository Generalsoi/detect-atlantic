import { Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Solutions } from "./components/Solutions";
import { Learn } from "./components/Learn";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";

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
