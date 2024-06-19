/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  AdvancedSearch,
  HeadeFilters,
  Pagination,
  PropertyFullWidth,
  Type,
} from "../components/common/page-componets";
import { PropertyList } from "../components/property";
import { closeFilterMenu, uiStore } from "../features/uiSlice";
import HomeLayout from "./HomeLayout";
import { baseUrl } from "../services/api";
import axios from "axios";
import Loader from "../components/common/Loader";

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
  const [beds, setBeds] = useState(0);
  const [bathrooms, setBathrooms] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [city, setCity] = useState("");
  const [minPropertyPrice, setMinPropertyPrice] = useState("");
  const [maxPropertyPrice, setMaxPropertyPrice] = useState("");
  const [propertyTypeData, setPropertyTypeData] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setErrors(null);

    try {
      const res = await axios.get(`${baseUrl}/api/properties`);
      if (res) {
        setRentData(res.data);
        setPropertyTypeData(res.data);
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
    setSelectedType("");
    console.log("Beds value before search:", beds);

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
    setBathrooms("");
    setBeds("");
    setCity("");
    setPropertyType("");
    setMinPropertyPrice("");
    setMaxPropertyPrice("");
    setSelectedType("");
    try {
      const response = await axios.get(`${baseUrl}/api/properties`);

      setRentData(response.data);
    } catch (error) {
      setErrors(error?.response?.data?.message);
    }

    setLoading(false);
  };

  const propertyTypeDataFiltered = propertyTypeData?.filter(
    (item) => item.propertyStatus === "A Louer"
  );

  const uniqueType = [
    ...new Set(propertyTypeDataFiltered?.map((item) => item.propertyType)),
  ];

  const sumByPropertyType = propertyTypeDataFiltered?.reduce((acc, item) => {
    acc[item.propertyType] = (acc[item.propertyType] || 0) + 1;
    return acc;
  }, {});

  const handleRadioChange = (e) => {
    const selectedType = e.target.value;
    setSelectedType(selectedType);

    const filteredData = propertyTypeDataFiltered.filter(
      (item) => item.propertyType === selectedType
    );

    setBathrooms("");
    setBeds("");
    setCity("");
    setPropertyType("");
    setMinPropertyPrice("");
    setMaxPropertyPrice("");
    setRentData(filteredData);
  };

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoading(true);
    }, 1000);

    return () => clearTimeout(loaderTimer);
  }, []);

  const [layout, setLayout] = useState("grid");

  return (
    <HomeLayout>
      <div className="pt-[120px] md:pt-[150px] px-[3%] md:px-[6%] pb-[5rem]">
        <div className="text-center mb-[3rem]">
          <h1 className="text-2xl text-primary mt-[1rem] mb-[1rem] font-bold ">
            NOS APPARTEMENTS EN LOCATION
          </h1>
          <h1 className="heading">
            Découvrez Une Gamme Diversifiée D'immeubles Mise En Location,
            Soigneusement Sélectionnés Pour Leur Qualité Et Leur Valeur. Que
            Vous Recherchiez Une Propriété Résidentielle Ou Commerciale, Nous
            Avons Ce Qu'il Vous Faut. Notre Équipe Professionnelle Est Là Pour
            Vous Guider À Travers Le Processus De Location, En Fournissant Des
            Conseils Avisés Et Un Service Personnalisé À Chaque Étape.
          </h1>
        </div>
        <HeadeFilters layout={layout} setLayout={setLayout} />

        <div className="grid md:grid-cols-4 gap-x-14 mt-5">
          {loading ? (
            <div className="md:col-span-3  flex items-center min-h-fit justify-center">
              <Loader />
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

                <Type
                  uniqueType={uniqueType}
                  sumByPropertyType={sumByPropertyType}
                  handleRadioChange={handleRadioChange}
                  selectedType={selectedType}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Alouer;
