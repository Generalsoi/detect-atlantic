import { Routes, Route } from "react-router-dom";
import { Contact } from "./routes/Contact";
import { Homepage } from "./routes/Homepage";
import { Solutions } from "./routes/Solutions";
import { Learn } from "./routes/Learn";
import { Team } from "./routes/Team";

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
