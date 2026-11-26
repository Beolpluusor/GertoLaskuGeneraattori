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
  const [ language, setLanguage ] = useState("fi");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GamePage 
                          difficulty={difficulty} 
                          setDifficulty={setDifficulty}
                          language={language}
                          setLanguage={setLanguage} 
                          />} />

        <Route path="/multiplication" element={<Kertolasku difficulty={difficulty} language={language} />} />
        <Route path="/plus" element={<Plus difficulty={difficulty} language={language} />} />
        <Route path="/divide" element={<Divide difficulty={difficulty} language={language} />} />
        <Route path="/subtract" element={<Subtract difficulty={difficulty} language={language} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
