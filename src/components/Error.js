import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { status, statusText } = error;

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-9xl font-primary text-primary">{status}</h1>
      <p className="text-3xl font-secondary text-dark">{statusText}</p>
      <p className="mt-8 p-2 font-secondary font-bold text-sm text-primary">
        You can go to{" "}
        <Link className="text-dark text-base" to="/">
          main page
        </Link>{" "}
        to view more restaurants
      </p>
    </div>
  );
};

export default Error;
