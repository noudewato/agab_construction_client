/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { BiBed, BiMap, BiMapAlt } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaBath } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import HomeLayout from "./HomeLayout";
import { baseUrl } from "../services/api";
import axios from "axios";
import Loader from "../components/common/Loader";
import SimilarItem from "../components/common/page-componets/SimilarItem";
import SingleProductCard from "../components/common/page-componets/SingleProductCard";

const PropertyForRentDetails = ({ basis }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const [singleData, setSingleData] = useState(null);
  const [data, setData] = useState([]);

  const fetchSingleData = useCallback(async () => {
    setLoading(true);
    setErrors(null);

    try {
      const res = await axios.get(`${baseUrl}/api/properties/${id}`);
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
      const res = await axios.get(`${baseUrl}/api/properties`);
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

  const filterData = data?.filter(
    (property) => property?.propertyStatus === "A Louer" && property?._id !== id
  );

  // const houseDetails = maison.find((house) => {
  //   return house.id === parseInt(id);
  // });


  let myCurrency = new Intl.NumberFormat("en-US");

  const images = singleData?.images.map((image) => ({
    original: `${image}`,
    thumbnail: `${image}`,
  }));

  return (
    <HomeLayout>
      {loading ? (
        <Loader />
      ) : errors ? (
        <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
          {errors}
        </div>
      ) : (
        <div className="px-[3%] md:px-[6%] pt-[3rem] mt-[3rem] bg-slate-100 min-h-[100vh] pb-[5rem]">
          <div className="text-center mb-[2rem]">
            <h1 className="text-2xl text-primary mt-[2rem] mb-[1rem] font-bold ">
              Propriete a louer
            </h1>
            <h1 className="heading">
              <h1 className="text-2xl md:text-5xl font-bold">
                {singleData?.propertyTitle}
              </h1>
            </h1>
          </div>
          <div className="block md:flex  mb-[.5rem]">
            <div className="flex items-center md:mr-5">
              <h3 className="text-2xl md:text-xl font-bold mr-10">Contact:</h3>
              <a
                href="tel:+22966551600"
                // style={{ width: "50%" }}
                className="btn btn-primary font-bold flex-center-center gap-x-2 my-[1rem]"
              >
                <span>
                  <FaPhoneAlt className="font-bold text-white" />
                </span>
                +22966551600
              </a>
            </div>

            <div className="flex items-center">
              <h3 className="text-2xl md:text-xl font-bold mr-3">Whatsapp:</h3>
              <a
                href="https://wa.me/+22996661896"
                // style={{ width: "50%" }}
                className="btn flex-center-center bg-green-400 font-bold text-white gap-x-2 my-[1rem] hover:bg-green-600"
              >
                <span>
                  <FaWhatsapp className="font-bold text-white" />
                </span>
                +22996661896
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3">
              <div className="bg-white shadow-2xl rounded-lg relative">
                <ImageGallery
                  items={images}
                  showPlayButton={false}
                  showFullscreenButton={false}
                />
                <span className="absolute top-0 px-7 bg-red-600 text-white font-bold">
                  A Louer
                </span>
              </div>

              <div className="my-[1rem] p-[1rem] bg-white shadow-2xl rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex-align-center gap-x-2">
                    {singleData?.beds ? (
                      <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                        <BiBed />{" "}
                      </div>
                    ) : (
                      ""
                    )}

                    <p className="text-lg font-semibold">
                      {singleData?.beds ? singleData?.beds + " Chambres" : ""}{" "}
                    </p>
                  </div>
                  <div className="flex-align-center gap-x-2">
                    {singleData?.bathrooms ? (
                      <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                        <FaBath />
                      </div>
                    ) : (
                      ""
                    )}

                    <p className="text-lg font-semibold">
                      {singleData?.bathrooms ? singleData?.bathrooms + " Douches" : ""}{" "}
                    </p>
                  </div>
                  <div className="flex-align-center gap-x-2">
                    <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                      <BiMap />
                    </div>

                    <p className="text-lg font-semibold">
                      {singleData?.city ? singleData?.city : ""}
                    </p>
                  </div>
                  <div className="flex-align-center gap-x-2">
                    <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                      <BiMapAlt />
                    </div>

                    <p className="text-lg font-semibold">
                      {singleData?.dimensions ? singleData?.dimensions : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-[1rem] p-[1rem] bg-white shadow-2xl rounded-lg">
                <h1 className="py-[1rem] text-xl font-semibold">
                  {singleData?.propertyTitle}
                </h1>
                <hr className="h-[10px]" />
                <h1 className="text-xl font-bold py-[1rem]">Details</h1>
                <div
                  className="text-lg text-slate-900 py-[1rem]"
                  dangerouslySetInnerHTML={{
                    __html: singleData && singleData?.propertyDetails,
                  }}
                />
              </div>
            </div>
            <div
              className={`d:col-span-1 px-[.5rem] bg-white shadow-2xl rounded-lg ${singleData && singleData?.nightPrice === 0 ? "h-[120px]" : "h-[155px]"} text-center`}
            >
              <h1 className="text-xl md:text-2xl font-bold mb-[.5rem] pt-[1rem]">
                Prix
              </h1>
              <h1 className="text-2xl text-primary md:text-xl font-bold pt-[.5rem]">
                {myCurrency.format(singleData?.propertyPrice).concat(".00")}{" "}
                FCFA/month
              </h1>
              {singleData && singleData?.nightPrice === 0 ? (
                ""
              ) : (
                <h1 className="text-2xl text-secondary md:text-xl font-bold pt-[.5rem]">
                  {myCurrency.format(40000).concat(".00")} FCFA/nuit
                </h1>
              )}
            </div>
          </div>

          <div className="mt-[1rem]">
            <h1 className="text-3xl font-bold mb-[.5rem]">
            PROPRIÉTÉS SIMILAIRES
            </h1>
            <SimilarItem>
              {filterData.slice(0, 5).map((item) => (
                <div
                  key={item._id}
                  className="relative flex-shrink-0 w-[400px] h-[450px] group rounded-lg overflow-hidden"
                >
                  <SingleProductCard key={item._id} {...item} basis={basis} />
                </div>
              ))}
            </SimilarItem>
          </div>
        </div>
      )}
    </HomeLayout>
  );
};

export default PropertyForRentDetails;
