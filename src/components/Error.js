import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { status, statusText } = error;

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-9xl font-primary text-primary">{status}</h1>
      <p className="text-3xl font-secondary text-dark">{statusText}</p>
    </div>
  );
};

export default Error;
