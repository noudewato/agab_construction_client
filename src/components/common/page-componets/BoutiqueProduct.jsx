import { Link } from "react-router-dom";
import CardHoverIcons from "./CardHoverIcons";

const BoutiqueProduct = ({ _id, productName, images, productPrice, basis }) => {
  const myCurrency = new Intl.NumberFormat("en-US");

  return (
    <div
      className={`flex-1 ${
        basis ? basis : "basis-[18rem]"
      } shadow-2xl dark:border-card-dark border bg-white rounded-2xl overflow-hidden cursor-pointer relative group`}
    >
      <Link
        to={`/boutique/${_id}`}
        className="group-hover:text-primary transition-a"
      >
        <div className="group !opacity-100 overflow-hidden relative">
          <div className="!opacity-100">
            <img
              src={images[0]}
              alt={productName}
              className="w-[100%] h-fit md:h-[300px] object-cover group-hover:scale-125 transition-a"
            />
          </div>

          <CardHoverIcons />
        </div>
        <div className="p-3 relative">
          <h1 className="text-lg font-bold capitalize">{productName}</h1>

          <div className="mt-4 flex justify-between items-center">
            <div className="text-lg font-semibold text-primary  py-1 rounded">
              {myCurrency.format(productPrice).concat(".00")}{" "}
              <span className="text-black">FCFA</span>
            </div>
            <button className="btn btn-secondary">detail</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BoutiqueProduct;
