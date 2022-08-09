import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./pages/Home";
import DmgCalc from "./pages/DmgCalc";

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/DmgCalc" element={<DmgCalc />}></Route>
      </Routes>
    </>
  );
};

export default App;