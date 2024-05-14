/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  AdvancedSearch,
  HeadeFilters,
  Pagination,
  // PriceRange,
  PropertyFullWidth,
  Type,
} from "../components/common/page-componets";
import { PropertyList } from "../components/property";
import { closeFilterMenu, uiStore } from "../features/uiSlice";
import HomeLayout from "./HomeLayout";
import { baseUrl } from "../services/api";
import axios from "axios";

const Alouer = () => {
  const { isFilterMenuOpen } = useSelector(uiStore);
  const dispatch = useDispatch();
  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [rentData, setRentData] = useState([]);
  const [beds, setBeds] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [city, setCity] = useState("");
  const [minPropertyPrice, setMinPropertyPrice] = useState("");
  const [maxPropertyPrice, setMaxPropertyPrice] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setErrors(null);

    try {
      const res = await axios.get(`${baseUrl}/api/properties`);
      if (res) {
        setRentData(res.data);
      }
    } catch (err) {
      console.log(err);
      setErrors("Error fetching data!!!");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const rentDataFiltered = rentData?.filter(
    (item) => item.propertyStatus === "A Louer"
  );

  const handleSearch = async () => {
    setLoading(true);
    setErrors(null);

    try {
      const response = await axios.get(`${baseUrl}/api/properties`, {
        params: {
          propertyType,
          minPropertyPrice,
          maxPropertyPrice,
          city,
          beds,
          bathrooms,
        },
      });

      setRentData(response.data);
    } catch (error) {
      // console.error("Error searching properties:", error);
      setErrors(error?.response?.data?.message);
    }

    setLoading(false);
  };

  const handleCancel = async () => {
    setLoading(true);
    setErrors(null);

    try {
      const response = await axios.get(`${baseUrl}/api/properties`);

      setRentData(response.data);
    } catch (error) {
      setErrors(error?.response?.data?.message);
    }

    setLoading(false);
  };

  // useEffect(() => {
  //   handleSearch();
  // }, [beds, bathrooms, propertyType, city, minPropertyPrice, maxPropertyPrice]);

  const [layout, setLayout] = useState("grid");

  return (
    <HomeLayout>
      <div className="pt-[120px] md:pt-[150px] px-[3%] md:px-[6%] pb-[5rem]">
        <div className="text-center mb-[3rem]">
          <h1 className="text-2xl text-primary mt-[1rem] mb-[1rem] font-bold ">
            NOS APPARTEMENTS EN LOCATION
          </h1>
          <h1 className="heading">
            Nous Disposons de bon appartements meubles climatise a louer.
          </h1>
        </div>
        <HeadeFilters layout={layout} setLayout={setLayout} />

        <div className="grid md:grid-cols-4 gap-x-14 mt-5">
          {loading ? (
            <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
              ...Loading
            </div>
          ) : errors ? (
            <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
              {errors}
            </div>
          ) : (
            <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
              {layout === "grid" ? <PropertyList /> : <PropertyFullWidth />}
              <Pagination itemsPerPage={8} pageData={rentDataFiltered} />
            </div>
          )}
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
                <AdvancedSearch
                  beds={beds}
                  setBeds={setBeds}
                  bathrooms={bathrooms}
                  setBathrooms={setBathrooms}
                  propertyType={propertyType}
                  setPropertyType={setPropertyType}
                  city={city}
                  setCity={setCity}
                  minPropertyPrice={minPropertyPrice}
                  setMinPropertyPrice={setMinPropertyPrice}
                  maxPropertyPrice={maxPropertyPrice}
                  setMaxPropertyPrice={setMaxPropertyPrice}
                  onSearch={handleSearch}
                  onCancel={handleCancel}
                />
                
                <Type rentDataFiltered={rentDataFiltered} />
                {/* <PriceRange /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Alouer;
