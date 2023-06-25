import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Logo.png";

const Title = () => {
  return <img className="h-full" src={Logo} alt="smileDine Logo" />;
};

const Header = () => {
  return (
    <div className="px-[15%] py-4 m-0 flex justify-between items-center">
      <div className="h-14 flex justify-between items-end">
        <Title />
      </div>
      <div className="w-2/5 flex justify-between items-center">
        <p className="text-xl">
          <FontAwesomeIcon className="mr-4" icon={faMagnifyingGlass} />
          Find
        </p>
        <p className="text-xl">Help</p>
        <p className="text-xl">Order</p>
        <p className="text-xl">Sign In</p>
      </div>
    </div>
  );
};

export default Header;
