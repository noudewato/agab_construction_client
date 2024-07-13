import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  AdvancedSearch,
  Pagination,
  Type,
} from "../components/common/page-componets";
import { BoutiqueList } from "../components/property";
import { closeFilterMenu, uiStore } from "../features/uiSlice";
import HomeLayout from "./HomeLayout";
import axios from "axios";
import { baseUrl } from "../services/api";
import { useCallback, useEffect, useState } from "react";
import Loader from "../components/common/Loader";

const Quincallerie = () => {
  const { isFilterMenuOpen } = useSelector(uiStore);
  const dispatch = useDispatch();
  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [itemData, setItemData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchData = useCallback(() => {
    setLoading(true);
    setErrors(null);

    axios
      .get(`${baseUrl}/api/products`)
      .then((response) => {
        setItemData(response.data);
        setProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setErrors("Error while fetching Data!!!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const uniqueType = [
    ...new Set(productData?.map((item) => item.productCategory)),
  ];

  const sumByPropertyType = productData?.reduce((acc, item) => {
    acc[item.productCategory] = (acc[item.productCategory] || 0) + 1;
    return acc;
  }, {});

  const handleRadioChange = (e) => {
    const selectedType = e.target.value;
    setSelectedCategory(selectedType);

    if (selectedType === "all") {
      setItemData(productData);
    } else {
      const filteredData = productData.filter(
        (item) => item.productCategory === selectedType
      );
      setItemData(filteredData);
    }
  };
  return (
    <HomeLayout>
      <div className="pt-[120px] md:pt-[150px] px-[3%] md:px-[6%] pb-[5rem]">
        <div className="text-center mb-[3rem]">
          <h1 className="text-2xl text-primary mb-[1rem] font-bold ">
            LA BOUTIQUE
          </h1>
          <h1 className="heading">
            Trouvez Tout Ce Dont Vous Avez Besoin Pour Votre Projet De
            Construction Dans Notre Quincaillerie Générale Haut De Gamme. Nous
            Nous Engageons À Fournir Des Matériaux De Qualité Supérieure Pour
            Assurer La Durabilité Et La Fiabilité De Vos Constructions. Que Vous
            Soyez Un Entrepreneur Ou Un Bricoleur Passionné, Notre Équipe Est Là
            Pour Vous Conseiller Et Vous Aider À Trouver Les Produits Adaptés À
            Vos Besoins Spécifiques.
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
                {/* <AdvancedSearch /> */}
                <Type
                  title={"Category"}
                  uniqueType={uniqueType}
                  sumByPropertyType={sumByPropertyType}
                  handleRadioChange={handleRadioChange}
                  selectedType={selectedCategory}
                />
              </div>
            </div>
          </div>
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
              <BoutiqueList />
              <Pagination itemsPerPage={9} pageData={itemData} />
            </div>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

export default Quincallerie;
