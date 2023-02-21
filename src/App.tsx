import { Routes, Route, useLocation } from "react-router-dom";

import { useEffect } from "react";

import { Cursor } from "./components/Cursor";
import { AnimatedPages } from "./components/AnimatedPages";

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Cursor />
      <AnimatedPages />
    </>
  );
};

export default App;
