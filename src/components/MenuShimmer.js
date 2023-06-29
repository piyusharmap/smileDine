import { MENU_SHIMMER_VALUE } from "../config";

const ShimmerCard = () => {
  return (
    <div className="p-2 flex bg-light justify-between">
      <p className="w-50 h-20 bg-primary"></p>
      <p className="w-20 h-20 bg-primary"></p>
      <p className="w-20 h-20 bg-primary"></p>
    </div>
  );
};

const MenuShimmer = () => {
  return (
    <div className="px-[10%] py-4 mt-4 flex justify-between items-start gap-8 animate-flicker">
      <div className="p-2 h-80 w-2/5 flex flex-col gap-2 bg-light">
        <p className="h-40 w-full bg-primary"></p>
        <p className="h-20 w-full bg-primary"></p>
      </div>
      <div className="w-full flex flex-col gap-2">
        {new Array(MENU_SHIMMER_VALUE).fill(0).map((element, index) => {
          return <ShimmerCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default MenuShimmer;
