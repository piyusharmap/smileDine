export const filterData = (restaurants, input) => {
  const data = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(input.toLowerCase())
  );

  return data;
};
