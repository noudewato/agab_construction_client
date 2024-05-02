import React, { useState, useRef } from "react";
import { boutique } from "../../../data/dummyData";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const BoutiqueItem = ({ basis }) => {

  const myCurrency = new Intl.NumberFormat('en-US')
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
  return (
    <div className="py-10">
      <div className="text-center my-[2rem]">
        <h1 className="sub-heading mx-auto text-primary mt-[1rem] mb-[1rem] font-bold ">
          Notre Boutique
        </h1>
        <h1 className="heading">
          Découvrez vite tous nos produits et tous nos avantages ! Avec des
          grandes marques reconnues et des milliers de produits disponibles chez
          nous
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
        <div
          className="gap-3 mt-4 overflow-auto flex-align-center scroll-smooth hide-scrollbar"
          ref={categoryContainer}
        >
          {boutique.map((myBoutique) => (
            <div
              key={myBoutique.id}
              className="relative flex-shrink-0 w-[200px] h-[200px] group rounded-lg overflow-hidden"
            >
              <Link to={`/boutique/${myBoutique.id}`}>
                <div className="deal cursor-pointer overflow-hidden w-[200px] h-[200px] relative group">
                  <div className="absolute top-0 right-0 bg-secondary p-1 text-white">
                    {myCurrency.format(myBoutique.price)} FCFA
                  </div>
                  <img
                    src={myBoutique.image}
                    alt="img"
                    className="rounded-xl w-full h-full object-cover group-hover:scale-125 transition-a"
                  />
                  <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
                    <h1 className="text-3xl font-bold">{myBoutique.name}</h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default BoutiqueItem;
