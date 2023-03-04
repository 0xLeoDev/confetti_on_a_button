// License MIT
// const [toggleConfetti, settoggleConfetti] = useState(false);

import "./App.css";
import React, { useState } from "react";
import Confetti from "./Confetti";

function App() {
  const [toggleConfetti, settoggleConfetti] = useState(false);

  function confettiStart() {
    //----- \/ This line starts the confetti \/ -----//
    settoggleConfetti(!toggleConfetti);
  }

  return (
    <div className="App">
      <button onClick={confettiStart}> Confetti on function </button>
      <Confetti
        toggleConfetti={toggleConfetti}
        settoggleConfetti={settoggleConfetti}
      />
    </div>
  );
}

export default App;
