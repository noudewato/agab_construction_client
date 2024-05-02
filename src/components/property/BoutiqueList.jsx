import BoutiqueProduct from "../common/page-componets/BoutiqueProduct";
import { useSelector } from "react-redux";
import { dataStore } from "../../features/dataSlice";

const BoutiqueList = ({ basis }) => {
    const { currentDataItems } = useSelector(dataStore);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {currentDataItems?.map((myBoutique) => (
        <BoutiqueProduct key={myBoutique.id} {...myBoutique} basis={basis} />
      ))}
    </div>
  );
};

export default BoutiqueList;
