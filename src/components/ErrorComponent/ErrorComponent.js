import React from "react";

export function ErrorComponent({ error, retry }) {
  return (
    <div>
      <p>{error}</p>
      <button onClick={retry}>Retry</button>
    </div>
  );
}
