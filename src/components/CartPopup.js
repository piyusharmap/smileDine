import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPopup = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const cartPrice = useSelector((store) => store.cart.cartPrice);

  return (
    <div className="w-full h-12 p-2 flex justify-between items-center sticky bottom-0 left-0 bg-accent ">
      <div className="w-1/4 flex gap-2 justify-center items-center">
        <p className="font-secondary font-bold text-base text-dark">
          Total items
        </p>
        <p className="font-secondary font-bold text-base text-dark">|</p>
        <p className="font-secondary font-bold text-base text-dark">
          {cartItems.length}
        </p>
      </div>

      <Link to="/user/order">
        <p className="font-secondary font-bold text-base text-dark">
          View Order
        </p>
      </Link>

      <div className="w-1/4 flex gap-2 justify-center items-center">
        <p className="font-secondary font-bold text-base text-dark">
          Order price
        </p>
        <p className="font-secondary font-bold text-base text-dark">|</p>
        <p className="font-secondary font-bold text-base text-dark">
          ₹{cartPrice}
        </p>
      </div>
    </div>
  );
};

export default CartPopup;
