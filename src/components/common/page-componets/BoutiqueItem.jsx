import React, { useState, useRef, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../services/api";
import Loader from "../Loader";

const BoutiqueItem = ({ basis }) => {
  const myCurrency = new Intl.NumberFormat("en-US");
  const categoryContainer = useRef(null);

  const [isScroll, setIsscroll] = useState(false);
  const scrollContainer = (direction) => {
    direction === "right"
      ? (categoryContainer.current.scrollLeft += 200)
      : (categoryContainer.current.scrollLeft -= 200);
    categoryContainer.current.scrollLeft > 0
      ? setIsscroll(true)
      : setIsscroll(false);
  };

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [itemData, setItemData] = useState([]);

  const fetchData = () => {
    setLoading(true);
    setErrors(null);

    axios
      .get(`${baseUrl}/api/products`)
      .then((response) => {
        setItemData(response.data);
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

  const shortText = (text, n) => {
    if (text.length > n) {
      return text.substring(0, n) + "...";
    }
    return text;
  };

  return (
    <div className="py-10">
      <div className="text-center my-[2rem]">
        <h1 className="sub-heading mx-auto text-primary mt-[1rem] mb-[1rem] font-bold ">
          Notre Boutique
        </h1>
        <h1 className="heading">
          Trouvez tout ce dont vous avez besoin pour votre projet de
          construction dans notre quincaillerie générale haut de gamme. Nous
          nous engageons à fournir des matériaux de qualité supérieure pour
          assurer la durabilité et la fiabilité de vos constructions. Que vous
          soyez un entrepreneur ou un bricoleur passionné, notre équipe est là
          pour vous conseiller et vous aider à trouver les produits adaptés à
          vos besoins spécifiques.
        </h1>
      </div>
      <div className="md:col-span-4">
        <div className="justify-end flex-align-center gap-x-3">
          <button
            className={`btn btn-primary !p-2 ${
              !isScroll && "opacity-50 cursor-not-allowed"
            }`}
            onClick={() => scrollContainer("left")}
          >
            <FiChevronLeft />
          </button>
          <button
            className="btn btn-primary !p-2"
            onClick={() => scrollContainer("right")}
          >
            <FiChevronRight />
          </button>
        </div>
        {loading ? (
          <div className="flex items-center min-h-fit justify-center">
            <Loader />
          </div>
        ) : errors ? (
          <div className="mt-5 md:mt-0 h-fit md:sticky top-0 ">{errors}</div>
        ) : (
          <div
            className="gap-3 mt-4 overflow-auto flex-align-center scroll-smooth hide-scrollbar"
            ref={categoryContainer}
          >
            {itemData.slice(0, 10).map((item) => (
              <div
                key={item._id}
                className="relative flex-shrink-0 w-[200px] h-[200px] group rounded-lg overflow-hidden"
              >
                <Link to={`/boutique/${item._id}`}>
                  <div className="deal cursor-pointer overflow-hidden w-[200px] h-[200px] relative group">
                    <div className="absolute top-0 right-0 bg-secondary p-1 text-white">
                      {myCurrency.format(item.productPrice).concat(".00")} FCFA
                    </div>
                    <img
                      src={item.images[0]}
                      alt="img"
                      className="rounded-xl w-full h-full object-cover group-hover:scale-125 transition-a"
                    />
                    <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
                      <h1 className="text-3xl font-bold">
                        {shortText(item.productName, 7)}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>{" "}
    </div>
  );
};

export default BoutiqueItem;
