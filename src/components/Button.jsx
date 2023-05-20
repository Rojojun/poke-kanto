import React from "react";

export default function Button({ value, action }) {
  return (
    <>
      <button onClick={action}>{value}</button>
    </>
  );
}
