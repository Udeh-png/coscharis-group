export const NumberGrid = () => {
  return (
    <div className="grid grid-cols-4 max-[541px]:grid-cols-2 gap-10">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold">40+</p>
        <span className="capitalize">Years Legacy</span>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold">30k+</p>
        <span className="capitalize">Employees</span>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold">10</p>
        <span className="capitalize">Countries</span>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold">$15B+</p>
        <span className="capitalize">Market cap</span>
      </div>
    </div>
  );
};
