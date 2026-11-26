import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function GamePage ({difficulty, setDifficulty }) {
    const [ chooseGame, setChooseGame ] = useState("");
    const listGames = ["multiplication", "plus", "subtract", "divide"]
    const navigate = useNavigate();


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
            <h1>choose your game</h1>
            {listGames.map(game => (
                <button
                key={game}
                onClick={() => gameSelect(game)}>
                    {game}
                </button>
            ))}
            <p>Difficulty: {difficulty}</p>

            <button onClick={() => setDifficulty(prev => prev + 1)}>
                Raise Difficulty
            </button>

            <button onClick={() => setDifficulty(prev => Math.max(1, prev - 1))}>
                Lower Difficulty
            </button>
        </div>
        </>
    )
}


export default GamePage