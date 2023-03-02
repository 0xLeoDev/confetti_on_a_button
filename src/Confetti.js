import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const Confetti = () => {
  const [toggleConfetti, settoggleConfetti] = useState(false);

  const [windowDimension, setwindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () =>
    setwindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <div>
      <button onClick={() => settoggleConfetti(!toggleConfetti)}>
        Confetti now
      </button>
      {toggleConfetti && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          tweenDuration={10}
          numberOfPieces={200}
        />
      )}
    </div>
  );
};

export default Confetti;
