import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { translations } from "../languages/translations";

function GamePage ({difficulty, setDifficulty, language, setLanguage }) {
    const [ chooseGame, setChooseGame ] = useState("");
    const listGames = ["multiplication", "plus", "subtract", "divide"]
    const navigate = useNavigate();
    const t = translations[language];


    function gameSelect(selectedGame) {
        setChooseGame(selectedGame);

        if (selectedGame === "multiplication") {
            navigate("/multiplication");
        }

        if (selectedGame === "plus") {
            navigate("/plus");
        }

        if (selectedGame === "subtract") {
            navigate("/subtract");
        }

        if (selectedGame === "divide") {
            navigate("/divide");
        }
    }

    
    return (
        <>
        <div>
            <h1>{t.chooseGame}</h1>
            {listGames.map(game => (
                <button
                key={game}
                onClick={() => gameSelect(game)}>
                    {game}
                </button>
            ))}
            <p>Difficulty: {difficulty}</p>

            <button onClick={() => setDifficulty(prev => prev + 1)}>
                {t.raiseDifficulty}
            </button>

            <button onClick={() => setDifficulty(prev => Math.max(1, prev - 1))}>
                {t.lowerDifficulty}
            </button>
            <br />
            <h3>{t.selectedL} : {t.language}</h3>
            <button
                onClick={() =>
                    setLanguage(language === "fi" ? "en" : "fi")
                }
            >
                {language === "fi" ? "English" : "Suomi"}
            </button>
        </div>
        </>
    )
}


export default GamePage