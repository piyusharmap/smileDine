import { useState } from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { status, statusText } = error;

  return (
    <div>
      <h1>{status}</h1>
      <p>{statusText}</p>
    </div>
  );
};

export default Error;
