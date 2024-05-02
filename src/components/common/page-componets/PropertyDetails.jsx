import React from "react";
import { useParams } from "react-router-dom";
import { location } from "../../../data/dummyData";

const PropertyDetails = () => {
  const { id } = useParams();

  const singleLocation = location.find((loc) => {
    return loc.id === parseInt(id);
  });
  console.log(singleLocation)
  console.log(id)
  return (
    <div className="pt-20 mt-[50px] px-[3%] md:px-[6%]">
      {singleLocation.name}
      
    </div>
  );
};

export default PropertyDetails;
