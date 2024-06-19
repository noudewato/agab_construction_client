import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";
import CardLabels from "./CardLabels";
import Carousel from "./Carousel";

const FeaturedLandCard = ({
  _id,
  propertyTitle,
  city,
  propertyPrice,
  propertyStatus,
  image,
  basis,
  duration,
  images,
  propertyLocation,
}) => {
  let myCurrency = new Intl.NumberFormat("en-US");
  return (
    <div
      className={`flex-1 ${
        basis ? basis : "basis-[18rem]"
      } shadow-lg dark:border-card-dark bg-white m-4 border rounded-2xl cursor-pointer overflow-hidden relative group`}
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
              alt={propertyTitle}
              className="w-full  h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
            />
          </div>
        ) : (
          ""
        )}
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <BiMap />
            <p>{propertyLocation}</p>
          </div>
        </div>
      </div>
      <CardLabels propertyStatus={propertyStatus} city={city} />
      <div className="p-3">
        <Link
          to={`/parcelle/${_id}`}
          className="group-hover:text-primary transition-a"
        >
          <h1 className="text-lg font-bold capitalize mb-[3rem]">
            {propertyTitle}
          </h1>

          <div className="absolute bottom-0 left-0 right-0 my-2 mx-4 flex-center-between">
            <h1 className="text-lg font-semibold text-primary">
              {myCurrency.format(propertyPrice)} FCFA{" "}
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

export default FeaturedLandCard;
