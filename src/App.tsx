import { Routes, Route, useLocation } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Homepage } from "./pages/Homepage";
import { Solutions } from "./pages/Solutions";
import { About } from "./pages/About";
import { Energy } from "./layouts/solutions/energy";
import { useEffect } from "react";
import { Platform } from "./layouts/solutions/platform";
import { OnDemand } from "./layouts/solutions/onDemand";

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Solutions />} path="/solutions"></Route>
      <Route element={<Energy />} path="/energy" />
      <Route element={<Platform />} path="/platform" />
      <Route element={<OnDemand />} path="/ondemand" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
};

export default App;
