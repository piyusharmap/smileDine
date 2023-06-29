import { IMG_CDN_URL } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "../../assets/FoodItem.png";
import store from "../../utils/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { clearCart } from "../../slices/cartSlice";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  return (
    <div className="mt-2 w-full py-2 px-4 flex justify-between items-center gap-4">
      <p className="whitespace-wrap overflow-y-clip font-secondary text-dark text-sm">
        {item.itemName.slice(0, 25) + "..."}
        <span className="ml-2 font-primary text-sm">({item.itemCount})</span>
      </p>
      <p className="font-bold font-secondary text-sm">₹{item.itemPrice}</p>
    </div>
  );
};

const OrderItem = ({ item }) => {
  return (
    <div className="w-full mt-2 p-2 flex justify-between items-center gap-4 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="w-full">
        <h1 className="p-2 font-bold font-primary">
          {item.itemRestaurant + ": "}
          <Link to={"/restaurant/" + item.itemRestaurantId}>
            <span className="text-light hover:text-primary">
              Visit Restaurant
            </span>
          </Link>
        </h1>{" "}
        <h1 className="p-2 font-secondary">{item.itemName}</h1>
        <h1 className="p-2 font-secondary font-bold text-dark">
          ₹{item.itemPrice}
        </h1>
      </div>

      <div className="w-1/4 flex flex-col justify-center items-center gap-2">
        <img
          className="h-20 w-28"
          src={item.itemImage ? IMG_CDN_URL + item.itemImage : FoodItem}
        />
        <p className="font-secondary font-bold text-sm">
          {"Qantity: " + item.itemCount}
        </p>
      </div>
    </div>
  );
};

const Order = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const cartPrice = useSelector((store) => store.cart.cartPrice);

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <button
          onClick={() => handleClear()}
          // className="w-fit mb-4 py-2 px-4 font-bold font-primary text-2xl text-center bg-red-600 text-white"
          className="w-full mb-4 p-2 font-bold font-primary text-sm text-center bg-red-600 text-white"
        >
          Reset Cart
        </button>
      ) : (
        <p className="w-full mb-4 p-2 font-bold font-primary text-sm text-center bg-red-600 text-white">
          To RESET order you need to add some items first.
        </p>
      )}
      <div className="px-[10%] h-min-screen p-4 flex justify-between items-start gap-8">
        <div className="w-2/5 flex flex-col justify-center items-center">
          <h1 className="w-full p-4 font-bold font-primary text-2xl border-b-[1px] border-dark border-dashed">
            Your Order
          </h1>
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              return <CartItem item={item} key={item.itemId} />;
            })
          ) : (
            <h1 className="w-full p-4 font-bold font-primary text-center text-red-600">
              No items in cart
            </h1>
          )}
          <div className="w-full p-4 flex justify-center items-center border-t-[1px] border-dark border-dashed">
            <p className="w-4/5 p-2 font-primary text-primary text-right">
              Grand Total:{" "}
            </p>
            <p className="p-2 font-primary text-primary">₹{cartPrice}</p>
          </div>
          <button className="mt-2 w-full py-2  font-secondary font-bold text-xl text-white bg-primary hover:opacity-80">
            <FontAwesomeIcon className="mr-2" icon={faCreditCard} />
            CHECKOUT
          </button>
        </div>

        <div className="w-full p-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              return <OrderItem item={item} key={item.itemId} />;
            })
          ) : (
            <h1 className="w-full p-2 font-bold font-primary text-center text-red-600">
              No items in Cart
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Order;
