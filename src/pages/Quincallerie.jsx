import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  AdvancedSearch,
  Pagination,
} from "../components/common/page-componets";
import { BoutiqueList } from "../components/property";
import { boutique } from "../data/dummyData";
import { closeFilterMenu, uiStore } from "../features/uiSlice";
import HomeLayout from "./HomeLayout";

const Quincallerie = () => {
  const { isFilterMenuOpen } = useSelector(uiStore);
  const dispatch = useDispatch();
  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };


  return (
    <HomeLayout>
      <div className="pt-[120px] md:pt-[150px] px-[3%] md:px-[6%] pb-[5rem]">
        <div className="text-center mb-[3rem]">
          <h1 className="text-2xl text-primary mb-[1rem] font-bold ">
            LA BOUTIQUE
          </h1>
          <h1 className="heading">
            Nous vous présentons les produits de haute de gamme dans notre
            Boutique.
          </h1>
        </div>
        <div className="grid md:grid-cols-4 gap-x-4 mt-5">
          <div className=" md:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0">
            <div
              className={`filter-modal ${isFilterMenuOpen && "open"}`}
              onClick={handleCloseFiltermenu}
            >
              <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
                <div className="flex-center-between border-b dark:border-dark md:hidden">
                  <div
                    className="icon-box md:hidden"
                    onClick={() => dispatch(closeFilterMenu())}
                  >
                    <FiDelete />
                  </div>
                  <p className="uppercase">Filters</p>
                </div>
                <AdvancedSearch />
              </div>
            </div>
          </div>
          <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
            <BoutiqueList />
            <Pagination itemsPerPage={9} pageData={boutique} />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Quincallerie;
