import { Link } from "react-router-dom";
import CardHoverIcons from "./CardHoverIcons";

const BoutiqueProduct = ({ id, name, image, price, basis }) => {
  let myCurrency = new Intl.NumberFormat("en-US");
  return (
    <div
      className={`flex-1 ${
        basis ? basis : "basis-[18rem]"
      } shadow-2xl dark:border-card-dark border bg-white rounded-2xl overflow-hidden cursor-pointer relative group`}
    >
      <Link
        to={`/boutique/${id}`}
        className="group-hover:text-primary transition-a"
      >
        <div className="group !opacity-100 overflow-hidden relative">
          <div className="!opacity-100">
            <img
              src={image}
              alt={name}
              className="w-full  h-fit md:h-[200px] object-cover group-hover:scale-125 transition-a"
            />
          </div>

          <CardHoverIcons />
        </div>
        <div className="p-3">
          <h1 className="text-lg font-bold capitalize">{name}</h1>

          <div className="mt-4 flex-center-between">
            <h1 className="text-lg font-semibold text-primary">
              {myCurrency.format(price)} FCFA{" "}
            </h1>
            <button className="btn btn-secondary">+</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BoutiqueProduct;
