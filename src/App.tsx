import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Homepage } from "./pages/Homepage";
import { Solutions } from "./pages/Solutions";
import { About } from "./pages/About";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Solutions />} path="/solutions" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
};

export default App;
