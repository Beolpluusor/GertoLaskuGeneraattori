import { useState, useEffect } from 'react'

export default function kertolasku() {

    // useState muuttujat
    const [ luku1, setLuku1 ] = useState(Math.floor(Math.random() * 10) + 1);
    const [ luku2, setLuku2 ] = useState(Math.floor(Math.random() * 10) + 1);
    const [ vastaus, setVastaus ] = useState(0);
    const [ historia, setHistoria ] = useState([]);
    const [ oikein, setOikein ] = useState(0);
    const [ vaarin, setVaarin ] = useState(0);

    // luodaan uudet luvut muuttujiin nappi
    const uusiTehtava = () => {
        setLuku1(Math.floor(Math.random() * 10) + 1);
        setLuku2(Math.floor(Math.random() * 10) + 1);
    };
    // tarkistetaan vastaus
    // plussataan oikein tai väärin
    // nollataan lopussa statet
    const tarkistaVastaus = () => {

        // otetaan ylös oikea tulos luvuista 1 ja 2
        let oikeaTulos = Number(luku1) * Number(luku2);
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
            [...prev, uusiMerkinta].slice(-10)
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

    return (
        <div className="kertolasku">
            <h1>kertolasku</h1>
            <h2>lasku funktio:</h2> 
            <p>{luku1} * {luku2}</p>
            <br />
            
            <input
                type="number"
                value={vastaus}
                onChange={(event) => setVastaus(event.target.value)} 
            />
            <h2>Historia</h2>
            <ul>
                {historia.map((rivi, index) => (
                    <li key={index}>
                        {rivi.luku1} x {rivi.luku2} = vastasit: {rivi.vastaus} oikea vastaus =  {rivi.oikeaVastaus}
                    </li>
                ))}
            </ul>
            <br />
                <p>oikein: {oikein}</p>
                <p>vaarin: {vaarin}</p>
            <Buttons />
            <button onClick={tarkistaVastaus}>vastaa</button>
            <button onClick={uusiTehtava}>uusi kertotaulu</button>
        </div>
    )
}