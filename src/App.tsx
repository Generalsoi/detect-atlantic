import { Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
    </Routes>
  );
};

export default App;
