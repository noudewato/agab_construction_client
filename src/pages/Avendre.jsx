import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  AdvancedSearch,
  HeadeFilters,
  Pagination,
  PriceRange,
  Type,
} from "../components/common/page-componets";
import { PropertyList } from "../components/property";
import { maison } from "../data/dummyData";
import { closeFilterMenu, uiStore } from "../features/uiSlice";
import HomeLayout from "./HomeLayout";
import axios from "axios";
import { baseUrl } from "../services/api";

const Avendre = () => {
  const { isFilterMenuOpen } = useSelector(uiStore);
  const dispatch = useDispatch();
  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [buyData, setBuyData] = useState([]);

  const fetchData = () => {
    setLoading(true);
    setErrors(null);

    axios
      .get(`${baseUrl}/api/properties`)
      .then((response) => {
        setBuyData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setErrors("Error while fetching Data!!!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const buyDataFiltered = buyData?.filter(
    (item) => item.propertyStatus === "A Vendre"
  );

  const [layout, setLayout] = useState("grid");

  return (
    <HomeLayout>
      <div className="pt-[120px] md:pt-[150px] px-[3%] md:px-[6%] pb-[5rem]">
        <div className="text-center mb-[3rem]">
          <h1 className="text-2xl text-primary mt-[1rem] mb-[1rem] font-bold ">
            DES MAISONS MIS EN VENTE
          </h1>
          <h1 className="heading">
            Nous Disposons de toute sorte de maison en vente.
          </h1>
        </div>
        <HeadeFilters layout={layout} setLayout={setLayout} />
        <div className="grid md:grid-cols-4 gap-x-14 mt-5">
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
                <Type />
                <PriceRange />
                {/* <SocialIcons /> */}
                {/* <CTA /> */}
              </div>
            </div>
          </div>
          <div className="md:col-span-3 gap-4 mt-5 md:mt-0 h-fit md:sticky top-0 mb-[3rem]">
            {layout === "grid" && <PropertyList />}
            <Pagination itemsPerPage={8} pageData={buyDataFiltered} />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Avendre;
