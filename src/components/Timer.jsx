import React from "react";

export default function Timer() {
  const timer = () => {};

  return (
    <>
      {setTimeout(
        () => (
          <div>Start Game</div>
        ),
        5000
      )}
    </>
  );
}
