import { useSelector } from "react-redux";
import { dataStore } from "../../features/dataSlice";
import SingleHomeCard from "../common/page-componets/SingleHomeCard";

const PropertyList = ({ basis }) => {
  const { currentDataItems } = useSelector(dataStore);
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-4">
      {currentDataItems?.map((myBoutique) => (
        <SingleHomeCard key={myBoutique.id} {...myBoutique} basis={basis} />
      ))}
    </div>
  );
};

export default PropertyList;
