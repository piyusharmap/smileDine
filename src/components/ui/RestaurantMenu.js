import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_URL, RESTAURANTS_MENU_API_URL } from "../../config";
import useResaurantMenu from "../../hooks/useRestaurantMenu";
import FoodItem from "../../assets/FoodItem.png";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurantInfo, menuInfo } = useResaurantMenu(id);

  if (!restaurantInfo) return null;

  return (
    <div className="flex">
      <div>
        <img
          src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}
          alt="Restaurant profile"
        />
        <h1>{restaurantInfo?.name}</h1>
        <p>{restaurantInfo?.city}</p>
        <p>{restaurantInfo?.costForTwoMessage}</p>
        <p>{restaurantInfo?.cuisines.join(", ")}</p>
        <p>
          <FontAwesomeIcon icon={faStar} />
          {restaurantInfo?.avgRating + "(" + restaurantInfo?.totalRatings + ")"}
        </p>
        <p>{restaurantInfo?.isOpen}</p>
      </div>
      <div>
        {menuInfo.map((menuItem, index) => {
          const menuItemInfo = menuItem?.card?.info;
          return (
            <div key={index}>
              <img
                src={
                  menuItemInfo?.imageId
                    ? IMG_CDN_URL + menuItemInfo?.imageId
                    : FoodItem
                }
                alt="Menu item"
              />
              <h1>{menuItemInfo?.name}</h1>
              <p>{menuItemInfo?.price / 100}</p>
              <p>{menuItemInfo?.isVeg}</p>
              <p>
                {menuInfo?.ratings
                  ? menuItemInfo?.ratings?.aggregateRating?.rating +
                    "(" +
                    menuItemInfo?.ratings?.aggregateRating?.ratingCount +
                    ")"
                  : "--"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
