// import { propertyTypes } from "../../../../data/dummyData";

const Type = ({ rentDataFiltered }) => {
  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Type de Propriete</h1>
      {rentDataFiltered?.filter(item=>item?.propertyType).map((item) => (
        <div key={item?._id} className="mt-3 filter flex-center-between">
          <div className="input-radio">
            <input type="radio" name="type" id={item?.propertyType} />
            <label htmlFor={item?.propertyType} className="capitalize">
              {item?.propertyType}
            </label>
          </div>
          {/* <p>{number}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Type;
