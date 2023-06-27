const CartPopup = () => {
  return (
    <div className="w-full h-12 p-2 flex justify-between items-center sticky bottom-0 left-0 bg-dark">
      <div className="w-1/4 flex gap-2 justify-center items-center">
        <p className="font-secondary text-base text-white">Total items</p>
        <p className="font-secondary text-base text-white">|</p>
        <p className="font-secondary text-base text-white">2</p>
      </div>
      <div className="w-1/4 flex gap-2 justify-center items-center">
        <p className="font-secondary text-base text-white">Order price</p>
        <p className="font-secondary text-base text-white">|</p>
        <p className="font-secondary text-base text-white">₹200</p>
      </div>
    </div>
  );
};

export default CartPopup;
