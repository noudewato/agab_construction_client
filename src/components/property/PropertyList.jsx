import { useSelector } from "react-redux";
import { dataStore } from "../../features/dataSlice";
import SingleHomeCard from "../common/page-componets/SingleHomeCard";

const PropertyList = ({ basis }) => {
  const { currentDataItems } = useSelector(dataStore);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-4">
      {currentDataItems?.map((item) => (
        <SingleHomeCard key={item._id} {...item} basis={basis} />
      ))}
    </div>
  );
};

export default PropertyList;
