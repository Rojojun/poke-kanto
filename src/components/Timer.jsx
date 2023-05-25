import React, { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [seconds]);

  return (
    <div
      style={{
        display: "flex",
        left: "255px",
        position: "absolute",
        color: "white",
        top: "210px",
      }}
    >
      {seconds <= 1 ? <h1>START GAME</h1> : <h1>{seconds - 1} REMAIN</h1>}
    </div>
  );
}
