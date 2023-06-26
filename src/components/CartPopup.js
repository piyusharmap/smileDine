const CartPopup = () => {
  return (
    <div className="w-full h-16 p-2 flex justify-between items-center sticky bottom-0 left-0 bg-secondary">
      <div className="w-1/4 flex gap-2 justify-center items-center">
        <p className="font-bold text-sm text-dark">Total items</p>
        <p className="font-bold text-sm text-dark">|</p>
        <p className="font-bold text-sm text-dark">2</p>
      </div>
      <div className="w-1/4 flex gap-2 justify-center items-center">
        <p className="font-bold text-sm text-dark">Order price</p>
        <p className="font-bold text-sm text-dark">|</p>
        <p className="font-bold text-sm text-dark">₹200</p>
      </div>
    </div>
  );
};

export default CartPopup;
