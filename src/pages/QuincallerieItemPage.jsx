import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { boutique } from "../data/dummyData";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import HomeLayout from "./HomeLayout";

const QuincallerieItemPage = () => {
  const { id } = useParams();

  const product = boutique.find((singleProduct) => {
    return singleProduct.id === parseInt(id);
  });
  let myCurrency = new Intl.NumberFormat("en-US");

   const [qty, setQty] = useState(1);

  return (
    <HomeLayout>
      <div className="px-[3%] md:px-[6%] pt-[3rem] bg-slate-100 min-h-[100vh] pb-[5rem] ">
        <div className="text-center mb-[3rem]">
          <h1 className="text-2xl text-primary mt-[6rem] mb-[1rem] font-bold ">
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
              src={product.image}
              alt={product.name}
              className="w-full h-[400px]"
            />
          </div>
          <div className="md:col-span-2 p-[1rem] row-start-3 md:row-start-auto h-fit md:sticky top-0">
            <h1 className="text-2xl md:text-5xl font-bold mb-[1rem]">
              {product.name}
            </h1>
            <hr className="w-full " />
            <h1 className="text-2xl md:text-4xl font-bold mt-[1rem] mb-[1rem]">
              {myCurrency.format(product.price)} FCFA
            </h1>
            <hr className="w-full" />
            <p className="my-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
              {/* necessitatibus minima tempore, fugiat eligendi voluptatem deleniti */}
              {/* at enim rerum aliquam laboriosam corporis quae natus dolores */}
              {/* doloremque iure deserunt repellat. Omnis! */}
            </p>
            <hr className="w-full" />
            <p className="my-[1rem]">
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
            </p>

            <hr className="w-full" />

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
      </div>
    </HomeLayout>
  );
};

export default QuincallerieItemPage;
