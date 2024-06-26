const Type = ({
  uniqueType,
  sumByPropertyType,
  selectedType,
  handleRadioChange,
}) => {
  // Calculate the total count of all properties
  const totalProperties = Object.values(sumByPropertyType).reduce((a, b) => a + b, 0);

  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Type de Propriete</h1>
      <div className="mt-3 filter flex-center-between">
        <div className="input-radio">
          <input
            type="radio"
            name="type"
            id="all"
            value="all"
            checked={selectedType === "all"}
            onChange={handleRadioChange}
          />
          <label htmlFor="all" className="capitalize">
            All
          </label>
        </div>
        <p>({totalProperties})</p>
      </div>
      {uniqueType?.map((propertyType, index) => (
        <div key={index} className="mt-3 filter flex-center-between">
          <div className="input-radio">
            <input
              type="radio"
              name="type"
              id={propertyType}
              value={propertyType}
              checked={selectedType === propertyType}
              onChange={handleRadioChange}
            />
            <label htmlFor={propertyType} className="capitalize">
              {propertyType}
            </label>
          </div>
          <p>({sumByPropertyType[propertyType]})</p>
        </div>
      ))}
    </div>
  );
};

export default Type;
