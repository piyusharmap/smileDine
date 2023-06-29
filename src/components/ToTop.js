import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

const ToTop = () => {
  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className="w-fit p-4 bg-accent text-dark rounded-full hover:bg-dark hover:text-accent"
    >
      <button>
        <FontAwesomeIcon className="text-xl" icon={faBowlFood} />
      </button>
    </div>
  );
};

export default ToTop;
