import { MENU_SHIMMER_VALUE } from "../config";

const ShimmerCard = () => {
  return (
    <div className="p-2 flex bg-gray-300 justify-between">
      <p className="w-50 h-20 bg-gray-400"></p>
      <p className="w-20 h-20 bg-gray-400"></p>
      <p className="w-20 h-20 bg-gray-400"></p>
    </div>
  );
};

const MenuShimmer = () => {
  return (
    <div className="px-[10%] py-4 mt-4 flex justify-between items-start gap-8 animate-flicker">
      <div className="h-80 w-2/5 flex flex-col gap-2 bg-gray-300">
        <p className="h-50 w-full bg-gray-400"></p>
        <p className="h-20 w-full bg-gray-400"></p>
        <p className="h-20 w-full bg-gray-400"></p>
      </div>
      <div className="w-full flex flex-col gap-2">
        {new Array(MENU_SHIMMER_VALUE).fill(0).map((element, index) => {
          return <ShimmerCard />;
        })}
      </div>
    </div>
  );
};

export default MenuShimmer;
