const Type = ({
  uniqueType,
  sumByPropertyType,
  selectedType,
  handleRadioChange,
}) => {
  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Type de Propriete</h1>
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
