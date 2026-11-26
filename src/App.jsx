import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./kertolaskugeneraattori.css";
import GamePage from "./pages/gamepage";

import Kertolasku from "./components/multiplication";
import Plus from "./components/plus";
import Divide from "./components/divide";
import Subtract from "./components/subtract";

function App() {
  const [ difficulty, setDifficulty ] = useState(1);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamePage difficulty={difficulty} setDifficulty={setDifficulty} />} />
        <Route path="/multiplication" element={<Kertolasku difficulty={difficulty}/>} />
        <Route path="/plus" element={<Plus difficulty={difficulty}/>} />
        <Route path="/divide" element={<Divide difficulty={difficulty}/>} />
        <Route path="/subtract" element={<Subtract difficulty={difficulty}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
