import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_URL } from "../../config";

const RestaurantCard = ({ restaurant }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    veg,
    avgRating,
    totalRatings,
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
          <FontAwesomeIcon className=" text-green-600" icon={faCircle} />
        ) : (
          <FontAwesomeIcon className=" text-red-600" icon={faCircle} />
        )}
      </p>
      <p>
        <FontAwesomeIcon icon={faStar} />
        {avgRating + "( " + totalRatings + " )"}
      </p>
      <p>{lastMileTravelString}</p>
    </div>
  );
};

export default RestaurantCard;
