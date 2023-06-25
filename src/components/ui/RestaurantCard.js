import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite, faCarrot } from "@fortawesome/free-solid-svg-icons";
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
    <div>
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="Restaurant Profile" />
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo / 100}</p>
      <p>
        {veg ? (
          <FontAwesomeIcon className=" text-green-600" icon={faCarrot} />
        ) : (
          <FontAwesomeIcon className=" text-red-600" icon={faDrumstickBite} />
        )}
      </p>
      <p>{avgRating}</p>
      <p>{lastMileTravelString}</p>
    </div>
  );
};

export default RestaurantCard;
