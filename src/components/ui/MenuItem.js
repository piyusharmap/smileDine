import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_URL } from "../../config";
import FoodItem from "../../assets/FoodItem.png";
import { addItem, removeItem } from "../../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../../utils/store";

const MenuItem = (props) => {
  const dispatch = useDispatch();
  const { info, restaurantName, resId } = props;
  const cartItems = useSelector((store) => store.cart.cartItems);

  const itemInfo = {
    itemRestaurantId: resId,
    itemRestaurant: restaurantName,
    itemId: info?.id,
    itemName: info?.name,
    itemPrice: info?.price / 100,
    itemImage: info?.imageId,
  };

  const handleAddItem = () => {
    dispatch(addItem(itemInfo));
  };

  const handleRemoveItem = (x) => {
    dispatch(removeItem(itemInfo.itemId));
  };

  return (
    <div className="mt-4 p-2 w-full flex justify-around items-center hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="w-1/2">
        <h1 className="font-bold font-secondary text-lg">{info?.name}</h1>
        <p className="mt-1 font-secondary font-bold text-sm">
          {info?.price ? "₹" + info?.price / 100 : "₹200"}
        </p>
        {info?.isVeg ? (
          <p className="text-green-600 font-bold text-sm font-secondary">VEG</p>
        ) : (
          <p className="text-red-600 font-bold text-sm font-secondary">
            NON-VEG
          </p>
        )}
        <p className="mt-1 font-secondary font-bold text-sm">
          <FontAwesomeIcon className="mr-2" icon={faStar} />
          {info?.ratings?.aggregatedRating?.rating
            ? +info?.ratings?.aggregatedRating?.rating
            : "--"}
        </p>
      </div>

      <img
        className="h-20 w-28"
        src={info?.imageId ? IMG_CDN_URL + info?.imageId : FoodItem}
        alt="Menu item"
      />

      <div className="flex justify-between items-center gap-2">
        <button onClick={() => handleAddItem()}>
          <FontAwesomeIcon
            className="m-1 font-primary font-bold text-dark text-sm hover:text-light"
            icon={faPlus}
          />
        </button>

        <p className="font-primary font-bold text-lg">
          {cartItems.find((item) => item.itemId === info?.id)?.itemCount}
        </p>

        <button onClick={() => handleRemoveItem()}>
          <FontAwesomeIcon
            className="m-1 font-primary font-bold text-dark text-sm hover:text-light"
            icon={faMinus}
          />
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
