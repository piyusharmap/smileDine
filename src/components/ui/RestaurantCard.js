import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEgg, faCarrot, faStar } from "@fortawesome/free-solid-svg-icons";

import FoodItem from "../../assets/FoodItem.png";
import { IMG_CDN_URL } from "../../config";

const RestaurantCard = ({ restaurant }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    veg,
    avgRating,
    lastMileTravelString,
  } = restaurant;

  return (
    <div className="p-4 w-72 flex flex-col hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
      <p className="w-fit mt-2 py-1 px-2 bg-accent text-xs font-primary text-dark">
        <FontAwesomeIcon className="mr-1" icon={faStar} />
        {avgRating}
      </p>
      <img
        className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        src={cloudinaryImageId ? IMG_CDN_URL + cloudinaryImageId : FoodItem}
        alt="Restaurant Image"
      />
      <h1 className="w-full whitespace-nowrap overflow-x-clip text-ellipsis mt-2 font-bold font-primary text-base">
        {name}
      </h1>
      <p className="w-full whitespace-nowrap overflow-x-clip text-ellipsis mt-2 font-secondary font-bold text-sm text-dark">
        {cuisines.join(", ")}
      </p>
      <div className="mt-2 flex justify-between items-center">
        <p className="text-sm font-secondary italic font-bold text-dark">
          {"₹ " + costForTwo / 100 + " for two"}
        </p>
        <p className="text-sm font-secondary text-dark">|</p>
        <p className="text-sm font-secondary text-dark">
          {veg ? (
            <FontAwesomeIcon
              className="text-lg text-green-600"
              icon={faCarrot}
            />
          ) : (
            <FontAwesomeIcon className="text-lg text-red-600" icon={faEgg} />
          )}
        </p>
        <p className="text-sm font-secondary text-dark">|</p>
        <p className="text-sm font-secondary italic font-bold text-dark">
          {lastMileTravelString}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
