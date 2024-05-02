import React, { useRef, useState } from "react";
import { BiBed, BiMap, BiMapAlt } from "react-icons/bi";
import { parcelle } from "../data/dummyData";
import { useParams } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaBath } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import SingleHomeCard from "../components/common/page-componets/SingleHomeCard";
import SingleProductCard from "../components/common/page-componets/SingleProductCardFullWidth";
import HomeLayout from "./HomeLayout";

const LandForSellDetails = ({ basis }) => {
  const { id } = useParams();
  const houseDetails = parcelle.find((house) => {
    return house.id === parseInt(id);
  });

  let myCurrency = new Intl.NumberFormat("en-US");

  const images = houseDetails.images.map((image) => ({
    original: `${image}`,
    thumbnail: `${image}`,
  }));

  return (
    <HomeLayout>
      <div className="px-[3%] md:px-[6%] pt-[3rem] mt-[3rem] bg-slate-100 min-h-[100vh] pb-[5rem]">
        <div className="text-center mb-[3rem]">
          <h1 className="text-2xl text-primary mt-[2rem] mb-[1rem] font-bold ">
            Nos Parcelle
          </h1>
          <h1 className="heading">
            <h1 className="text-2xl md:text-5xl font-bold mb-[1rem]">
              {houseDetails.name}
            </h1>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <div className="bg-white shadow-2xl rounded-lg">
              <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
              />
            </div>

            <div className="my-[1rem] p-[1rem] bg-white shadow-2xl rounded-lg">
              <h1 className="py-[1rem] text-xl font-semibold">
                {houseDetails.subname} <br />
                <span className="text-secondary">Address:</span>{" "}
                <span className="text-primary">{houseDetails.address}</span>{" "}
              </h1>
              <hr className="h-[10px]" />
              <h1 className="text-xl font-bold py-[1rem]">Details</h1>
              – Toutes les chambres avec salle de bains <br />
              – Armoires de cuisine intégrées <br />
              – Cuisine meublée <br />
              – Armoires encastrées <br />
              – Plafond P.O.P <br />
              –Composé carrelé <br />
              – Design moderne <br />
              – Composé très spacieux <br />
              – Toilettes pour les invités <br />– Documents de titre
              disponibles
            </div>
          </div>
          <div className="md:col-span-1 px-[.5rem] bg-white shadow-2xl rounded-lg h-[200px]">
            <h1 className="text-2xl md:text-xl font-bold mb-[1rem] pt-[1rem]">
              {myCurrency.format(houseDetails.prix)} FCFA
              <br />
              {houseDetails.options ? (
                <span>
                  {myCurrency.format(houseDetails?.options?.price)} FCFA/
                </span>
              ) : (
                ""
              )}
            </h1>

            <button className="btn btn-primary font-bold flex-center-center gap-x-2 my-[1rem]">
              <span>
                <FaPhoneAlt className="font-bold text-white" />
              </span>
              +22966551600
            </button>
            <button className="btn flex-center-center bg-green-400 font-bold text-white gap-x-2 my-[1rem] hover:bg-green-600">
              <span>
                <FaWhatsapp className="font-bold text-white" />
              </span>
              +22950342510
            </button>
          </div>
        </div>

        <div className="mt-[1rem]">
          <h1 className="text-3xl font-bold mb-[1.5rem]">
            Parcelles Similaires
          </h1>
          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 bg-white shadow-2xl rounded-lg p-[1rem]">
              {parcelle?.map((myBoutique) => (
                <SingleProductCard
                  key={myBoutique.id}
                  {...myBoutique}
                  basis={basis}
                />
              ))}
            </div>
          </div>
        </div>

        {/* <Chat /> */}
      </div>
    </HomeLayout>
  );
};

export default LandForSellDetails;
