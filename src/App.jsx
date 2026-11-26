import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./kertolaskugeneraattori.css";
import GamePage from "./pages/gamepage";

import Kertolasku from "./components/multiplication";
import Plus from "./components/plus";
import Divide from "./components/divide";
import Subtract from "./components/subtract";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/multiplication" element={<Kertolasku />} />
        <Route path="/plus" element={<Plus />} />
        <Route path="/divide" element={<Divide />} />
        <Route path="/subtract" element={<Subtract />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
