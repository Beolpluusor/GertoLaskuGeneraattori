import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
export default function multiply({ difficulty }) {
    const navigate = useNavigate();

    // useState muuttujat
    const [ luku1, setLuku1 ] = useState(Math.floor(Math.random() * 10) + difficulty);
    const [ luku2, setLuku2 ] = useState(Math.floor(Math.random() * 10) + difficulty);
    const [ vastaus, setVastaus ] = useState("");
    const [ historia, setHistoria ] = useState([]);
    const [ oikein, setOikein ] = useState(0);
    const [ vaarin, setVaarin ] = useState(0);

    // luodaan uudet luvut muuttujiin nappi
    const uusiTehtava = () => {
        setLuku1(Math.floor(Math.random() * 10) + difficulty);
        setLuku2(Math.floor(Math.random() * 10) + difficulty);
    };
    // tarkistetaan vastaus
    // plussataan oikein tai väärin
    // nollataan lopussa statet
    const tarkistaVastaus = () => {

        // otetaan ylös oikea tulos luvuista 1 ja 2
        let oikeaTulos = Number(luku1) + Number(luku2);
        // otetaan ylös käyttäjän syöte
        let kayttajanSyote = Number(vastaus);

        // tarkistetaan käyttäjän syöte ja oikeatulos täsmää
        if (Number(kayttajanSyote) === Number(oikeaTulos)) {
            // lisätään oikein arvoa yhdellä
            setOikein(prev => prev +1);
        } else {
            // lisätään väärin arvoa yhdellä
            setVaarin(prev => prev +1)
        }
        // luodaan uusi merkintä
        const uusiMerkinta = {
            luku1,
            luku2,
            vastaus: Number(vastaus),
            oikeaVastaus: oikeaTulos
        };
        // asetetaan uusimerkintä historiaan
        setHistoria(prev =>
            [uusiMerkinta, ...prev].slice(0, 10)
        );
        // nollataan tehtävä ja vastaus
        uusiTehtava();
        setVastaus("");
    }

    //useEffect komponenttien lataamiseen
    useEffect(() => {
        console.log("komponentti ladattu")
    }, []);


    function Buttons () {
        const numerot = [7,8,9,4,5,6,1,2,3,0];
        
        return (
            <div className="numpad">
                {numerot.map(luku => (
                    <button
                        key={luku}
                        onClick={() => setVastaus(prev => prev + luku)}>
                            {luku}
                        </button>
                ))}
            </div>
        )
    };


    function nollaaVastaus () {
        setVastaus("");
        uusiTehtava();
        setHistoria([]);
        setOikein(0);
        setVaarin(0);
    };

    return (
        <div className="kertolasku">
            <h1>Plus!</h1>
                <p>{luku1} + {luku2}</p>
            <br />
                <p>your answer: [{vastaus}]</p>
                <p>correct points: {oikein}</p>
                <p>wrong points: {vaarin}</p>
        
            <Buttons />
            <button onClick={tarkistaVastaus}>answer</button>
            <button onClick={uusiTehtava}>new multiplation</button>
            <button onClick={nollaaVastaus}>reset</button>

            <h2>History</h2>
                <ul>
                    {historia.map((rivi, index) => (
                        <li key={index}>
                            {rivi.luku1} + {rivi.luku2} = you answered: {rivi.vastaus} oikea vastaus =  {rivi.oikeaVastaus}
                        </li>
                    ))}
                </ul>
            <br />
            <button onClick={() => navigate("/")}>back to games</button>
        </div>
    )
}