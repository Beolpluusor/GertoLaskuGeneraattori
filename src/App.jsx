import { useState } from 'react'
import Kertolasku from "./components/kertolasku";
import "./kertolaskugeneraattori.css";


function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <Kertolasku />
        </div>
      </section>
    </>
  )
}

export default App
