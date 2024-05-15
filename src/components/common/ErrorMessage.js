import React from "react";

function ErrorMessage({ error, children }) {
  return (
    <div>
      <p>ERROR: {error.message}</p>
      {children}
    </div>
  );
}

export default ErrorMessage;
