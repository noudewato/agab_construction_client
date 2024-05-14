const cardLabels = ({ propertyStatus, propertyLocation, city }) => {
  return (
    <div className="absolute top-2 left-2 flex-align-center gap-x-2">
      <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-primary">
        {propertyLocation ? propertyLocation : city}
      </span>
      <span
        className={`${
          propertyStatus ? propertyStatus : "hidden"
        }py-[3px] px-3 text-sm rounded-full capitalize text-white ${
          propertyStatus && propertyStatus === "A Vendre"
            ? "bg-secondary"
            : "bg-amb"
        } `}
      >
        {propertyStatus ? propertyStatus : null}
      </span>
    </div>
  );
};

export default cardLabels;
