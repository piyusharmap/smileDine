import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faBowlFood,
  faUser,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import LogoDark from "../../assets/LogoDark.png";
import { Link } from "react-router-dom";
import store from "../../utils/store";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <img
      className="h-full drop-shadow-xl"
      src={LogoDark}
      alt="Smile Dine Logo"
    />
  );
};

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <div className="px-[10%] py-2 m-0 flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="w-1/4 flex justify-between items-center">
        <Link to="/about">
          <p className="text-primary font-primary font-bold hover:text-dark">
            <FontAwesomeIcon className="mr-2" icon={faCircleInfo} />
            About
          </p>
        </Link>
        <Link to="/">
          <p className="text-primary font-primary font-bold hover:text-dark">
            <FontAwesomeIcon className="mr-2" icon={faBowlFood} />
            Food
          </p>
        </Link>
      </div>
      <div className="h-20">
        <Title />
      </div>
      <div className="w-1/4 flex justify-between items-center">
        <Link to="/user/signin">
          <p className="text-primary font-primary font-bold hover:text-dark">
            <FontAwesomeIcon className="mr-2" icon={faUser} />
            Sign In
          </p>
        </Link>
        <div className="flex justify-center items-center gap-2">
          <Link to="/user/order">
            <p className="text-primary font-primary font-bold hover:text-dark">
              <FontAwesomeIcon className="mr-2" icon={faReceipt} />
              Order
            </p>
          </Link>

          <span className="font-extrabold text-lg text-dark font-primary">
            {cartItems.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
