import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link } from "react-router-dom";
import CardLabels from "./CardLabels";
import Carousel from "./Carousel";

const SingleProductCard = ({
  id,
  name,
  location,
  price,
  prix,
  address,
  distance,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  image,
  basis,
  duration,
  images,
}) => {
  const myCurrency = new Intl.NumberFormat("en-US");
  return (
    <div
      className={`flex-1 ${
        basis ? basis : "basis-[18rem]"
      } shadow-light dark:border-card-dark border rounded-lg overflow-hidden m-[.5rem] relative group`}
    >
      <div className="group !opacity-100 overflow-hidden relative">
        {images ? (
          <div>
            <Carousel images={images} />
          </div>
        ) : image ? (
          <div className="!opacity-100">
            <img
              src={image}
              alt={name}
              className="w-full  h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
            />
          </div>
        ) : (
          ""
        )}

        {/* <CardHoverIcons /> */}
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <BiMap />
            <p>{location ? location : address}</p>
          </div>
        </div>
      </div>
      <CardLabels
        purpose={purpose}
        distance={distance}
        location={location ? location : address}
      />
      <div className="p-3">
        <Link
          to={purpose === "A Vendre" ? `/a-vendre/${id}` : `/a-louer/${id}`}
          className="group-hover:text-primary transition-a"
        >
          <h1 className="text-lg font-bold capitalize">{name}</h1>

          <div className="flex justify-between mt-3">
            <div className="flex-align-center gap-x-2">
              {number_of_beds ? (
                <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                  <BiBed />{" "}
                </div>
              ) : (
                ""
              )}

              <p className="text-sm">
                {number_of_beds ? number_of_beds + " Chambres" : ""}{" "}
              </p>
            </div>
            <div className="flex-align-center gap-x-2">
              {number_of_bathrooms ? (
                <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                  <BiTab />
                </div>
              ) : (
                ""
              )}

              <p className="text-sm">
                {number_of_bathrooms ? number_of_bathrooms + " Douches" : ""}{" "}
              </p>
            </div>
            <div className="flex-align-center gap-x-2">
              {dimensions ? (
                <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                  <BiMapAlt />
                </div>
              ) : (
                ""
              )}

              <p className="text-sm">{dimensions ? dimensions : ""}</p>
            </div>
          </div>

          <div className="mt-4 flex-center-between">
            <h1 className="text-lg font-semibold text-primary">
              {price ? myCurrency.format(price) : myCurrency.format(prix)} FCFA{" "}
              <span className="text-gray-400">
                {duration ? "/" + duration : ""}
              </span>
            </h1>
            <button className="btn btn-secondary">details</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleProductCard;
