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
    <div className="px-[10%] py-2 m-0 flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="w-1/4 flex justify-between items-center">
        <Link to="/user/signin">
          <p className="text-light font-primary font-bold hover:text-dark">
            <FontAwesomeIcon className="mr-2" icon={faArrowRightToBracket} />
            Sign In
          </p>
        </Link>
        <Link to="/">
          <p className="text-light font-primary font-bold hover:text-dark">
            <FontAwesomeIcon className="mr-2" icon={faMagnifyingGlass} />
            Search
          </p>
        </Link>
      </div>
      <div className="h-20">
        <Title />
      </div>
      <div className="w-1/4 flex justify-between items-center">
        <Link to="/help">
          <p className="text-light font-primary font-bold hover:text-dark">
            <FontAwesomeIcon className="mr-2" icon={faQuestion} />
            Help
          </p>
        </Link>
        <div className="flex justify-center items-center gap-2">
          <p className="text-light font-primary font-bold hover:text-dark">
            <FontAwesomeIcon className="mr-2" icon={faBagShopping} />
            Order
          </p>
          <span className="font-extrabold text-lg text-dark font-primary">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
