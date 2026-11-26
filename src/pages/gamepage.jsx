import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function GamePage () {
    const [chooseGame, setChooseGame ] = useState("");
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
        <div>
            <h1>choose your game</h1>
            {listGames.map(game => (
                <button
                key={game}
                onClick={() => gameSelect(game)}>
                    {game}
                </button>
            ))}
            
        </div>
    )
}


export default GamePage