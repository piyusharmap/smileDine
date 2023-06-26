import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faMagnifyingGlass,
  faQuestion,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import LogoDark from "../../assets/LogoDark.png";
import { Link } from "react-router-dom";

const Title = () => {
  return <img className="h-full" src={LogoDark} alt="Smile Dine Logo" />;
};

const Header = () => {
  return (
    <div className="px-[10%] py-2 m-0 flex justify-between items-center border-b-4 border-primary border-solid">
      <div className="w-1/4 flex justify-between items-center">
        <p className="text-lg font-primary hover:font-bold">
          <FontAwesomeIcon className="mr-2" icon={faArrowRightToBracket} />
          Sign In
        </p>
        <Link to="/">
          <p className="text-lg font-primary hover:font-bold">
            <FontAwesomeIcon className="mr-2" icon={faMagnifyingGlass} />
            Search
          </p>
        </Link>
      </div>
      <div className="h-20">
        <Title />
      </div>
      <div className="w-1/4 flex justify-between items-center">
        <p className="text-lg font-primary hover:font-bold">
          <FontAwesomeIcon className="mr-2" icon={faQuestion} />
          Help
        </p>
        <p className="text-lg font-primary hover:font-bold">
          <FontAwesomeIcon className="mr-2" icon={faBagShopping} />
          Order
          <span className="p-1 text-secondary underline">10</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
