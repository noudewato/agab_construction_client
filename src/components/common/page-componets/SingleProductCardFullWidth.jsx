import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link } from "react-router-dom";
import CardLabels from "./CardLabels";
import Carousel from "./Carousel";

const SingleHomeCard = ({
  id,
  name,
  location,
  prix,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  image,
  basis,
  duration,
  images,
  address
}) => {
  let myCurrency = new Intl.NumberFormat("en-US");
  return (
    <div
      className={`flex-1 ${
        basis ? basis : "basis-[18rem]"
      } shadow-2xl dark:border-card-dark bg-white border rounded-2xl cursor-pointer overflow-hidden relative group`}
    >
      <div className="group !opacity-100 overflow-hidden relative">
        {images ? (
          <div>
            <Carousel images={images}/>
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
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <BiMap />
            <p>{address}</p>
          </div>
        </div>
      </div>
      <CardLabels purpose={purpose} address={address} />
      <div className="p-3">
        <Link
          to={`/parcelle/${id}`}
          className="group-hover:text-primary transition-a"
        >
          <h1 className="text-lg font-bold capitalize">{name}</h1>

          <div className="flex justify-between mt-3 mb-[3rem]">
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

          <div className="absolute bottom-0 left-0 right-0 my-2 mx-4 flex-center-between">
            <h1 className="text-lg font-semibold text-primary">
              {myCurrency.format(prix)} FCFA{" "}
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

export default SingleHomeCard;
