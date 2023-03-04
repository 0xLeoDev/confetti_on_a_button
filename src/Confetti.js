import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const Confetti = (props) => {
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
      {/* Conditional rendering */}
      {props.toggleConfetti && (
        <ReactConfetti
          width={windowDimension.width * 0.999}
          height={windowDimension.height}
          tweenDuration={5000}
          numberOfPieces={300}
          gravity={0.15}
          initialVelocityX={5}
          recycle={false}
          onConfettiComplete={() =>
            props.settoggleConfetti(!props.toggleConfetti)
          }
        />
      )}
    </div>
  );
};

export default Confetti;
