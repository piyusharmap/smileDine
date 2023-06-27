import { BODY_SHIMMER_VALUE } from "../config";

const ShimmerCard = () => {
  return (
    <div className="p-4 h-72 w-72 flex flex-col gap-2 bg-light">
      <div className="h-32 w-full bg-primary"></div>
      <p className="h-12 w-full bg-primary"></p>
      <p className="h-12 w-full bg-primary"></p>
    </div>
  );
};

const BodyShimmer = () => {
  return (
    <div className="min-h-screen p-4 flex flex-wrap justify-around gap-4 animate-flicker">
      {new Array(BODY_SHIMMER_VALUE).fill(0).map((element, index) => {
        return <ShimmerCard key={index} />;
      })}
    </div>
  );
};

export default BodyShimmer;
