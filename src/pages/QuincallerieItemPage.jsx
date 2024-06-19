import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { boutique } from "../data/dummyData";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import HomeLayout from "./HomeLayout";
import axios from "axios";
import { baseUrl } from "../services/api";
import SimilarItem from "../components/common/page-componets/SimilarItem";
import BoutiqueProduct from "../components/common/page-componets/BoutiqueProduct";

const QuincallerieItemPage = ({ basis }) => {
  const { id } = useParams();

  // const singleData? = boutique.find((singleProduct) => {
  //   return singleProduct.id === parseInt(id);
  // });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const [singleData, setSingleData] = useState(null);
  const [data, setData] = useState([]);

  const fetchSingleData = useCallback(async () => {
    setLoading(true);
    setErrors(null);

    try {
      const res = await axios.get(`${baseUrl}/api/products/${id}`);
      if (res) {
        setSingleData(res.data);
      }
    } catch (err) {
      console.log(err);
      setErrors("Error fetching data!!!");
    }

    setLoading(false);
  }, [baseUrl, id]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setErrors(null);

    try {
      const res = await axios.get(`${baseUrl}/api/products`);
      if (res) {
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
      setErrors("Error fetching data!!!");
    }

    setLoading(false);
  }, [baseUrl, id]);

  useEffect(() => {
    fetchData();
    fetchSingleData();
  }, [fetchData, fetchSingleData]);

  const filterData = data?.filter((product) => product?._id !== id);

  let myCurrency = new Intl.NumberFormat("en-US");

  const [qty, setQty] = useState(1);

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
        <div className="grid md:grid-cols-4 gap-4 mt-5">
          <div className="md:col-span-2 md:mt-0 h-fit md:sticky top-0">
            <img
              src={singleData?.images[0]}
              alt={singleData?.productName}
              className="w-full h-[400px] rounded-lg"
            />
          </div>
          <div className="md:col-span-2 p-[1rem] row-start-3 md:row-start-auto h-fit md:sticky top-0">
            <h1 className="text-2xl md:text-5xl font-bold mb-[1rem]">
              {singleData?.productName}
            </h1>
            <hr className="w-full " />
            <h1 className="text-2xl text-primary md:text-4xl font-bold mt-[1rem] mb-[1rem]">
              {myCurrency.format(singleData?.productPrice)} FCFA
            </h1>
            <hr className="w-full" />
            <div
              className="text-lg text-slate-900 py-[1rem]"
              dangerouslySetInnerHTML={{
                __html: singleData && singleData?.productDetails,
              }}
            />
            <hr className="w-full" />
            {/* <p className="my-[1rem]">
              <div className="flex flex-row flex-wrap items-center gap-12">
                <div className="flex flex-row items-center">
                  <button
                    className="bg-white py-2 px-5 rounded-lg text-primary text-3xl"
                    onClick={() => setQty((prev) => prev - 1)}
                  >
                    -
                  </button>
                  <span className="py-4 px-6 rounded-lg">{qty}</span>
                  <button
                    className="bg-white py-2 px-4 rounded-lg text-primary text-3xl"
                    onClick={() => setQty((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="bg-secondary text-sm text-white font-semibold py-3 px-16 rounded-xl h-full">
                  Ajouter au panier
                </button>
              </div>
            </p> */}

            <hr className="w-full" />

            <div className="block md:flex mb-[.5rem]">
              <div className="flex items-center">
                <h3 className="text-4xl md:text-xl font-bold mr-7">Contact:</h3>
                <a
                  href="tel:+22966551600"
                  style={{ width: "50%" }}
                  className="btn btn-primary font-bold flex-center-center gap-x-2 my-[1rem]"
                >
                  <span>
                    <FaPhoneAlt className="font-bold text-white" />
                  </span>
                  +22966551600
                </a>
              </div>

              <div className="flex items-center mt-[-.5rem]">
                <h3 className="text-2xl md:text-xl font-bold mr-2">
                  Whatsapp:
                </h3>
                <a
                  href="https://wa.me/+22996661896"
                  style={{ width: "50%" }}
                  className="btn flex-center-center bg-green-400 font-bold text-white gap-x-2 my-[1rem] hover:bg-green-600"
                >
                  <span>
                    <FaWhatsapp className="font-bold text-white" />
                  </span>
                  +22996661896
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[1rem]">
          <h1 className="text-3xl font-bold mb-[.5rem]">
            Product Similaires
          </h1>
          <SimilarItem>
            {filterData.slice(0, 5).map((item) => (
              <div
                key={item._id}
                className="relative flex-shrink-0 w-[400px] h-[400px] group rounded-lg overflow-hidden"
              >
                <BoutiqueProduct key={item._id} {...item} basis={basis} />
              </div>
            ))}
          </SimilarItem>
        </div>
      </div>
    </HomeLayout>
  );
};

export default QuincallerieItemPage;
