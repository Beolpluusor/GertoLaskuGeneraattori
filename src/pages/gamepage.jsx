import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { translations } from "../languages/translations";

function GamePage ({difficulty, setDifficulty, language, setLanguage }) {
    const t = translations[language];
    const [ chooseGame, setChooseGame ] = useState("");
    const listGames = [t.game1, t.game2, t.game3, t.game4];
    const navigate = useNavigate();
    

    function gameSelect(selectedGame) {
        setChooseGame(selectedGame);

        if (selectedGame === t.game1) {
            navigate("/multiplication");
        }

        if (selectedGame === t.game2) {
            navigate("/plus");
        }

        if (selectedGame === t.game3) {
            navigate("/subtract");
        }

        if (selectedGame === t.game4) {
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
            <p>{t.difficulty}: {difficulty}</p>

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
            <p>{t.info}</p>
        </div>
        </>
    )
}


export default GamePage