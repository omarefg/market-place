import React from "react";

export function ErrorComponent({ error, retry }) {
  return (
    <div>
      <p data-testid="ErrorComponent_title">{error}</p>
      <button data-testid="ErrorComponent_retryButton" onClick={retry}>Retry</button>
    </div>
  );
}
