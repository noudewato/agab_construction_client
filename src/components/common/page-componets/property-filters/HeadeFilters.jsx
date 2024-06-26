import React from "react";
import { FiFilter } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { openFilterMenu } from "../../../../features/uiSlice";

const HeadeFilters = ({
  layout,
  setLayout,
  buyDataFiltered,
  rentDataFiltered,
  landData,
  uniqueCity,
  sumUniqueCity,
  selectedType,
  handleChange,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex-col gap-4 md:flex-row">
      <div className="w-full flex-center-between md:flex-center-start">
        <p className="font-bold text-black uppercase">
          {buyDataFiltered ? (
            <span>
              propriete Trouvee ({buyDataFiltered && buyDataFiltered?.length}){" "}
            </span>
          ) : rentDataFiltered ? (
            <span>
              propriete Trouvee ({rentDataFiltered && rentDataFiltered?.length}){" "}
            </span>
          ) : (
            <span>Parcelle Trouvee ({landData && landData?.length}) </span>
          )}
        </p>
        <div className="gap-2 flex-align-center">
          <div
            className={`flex border w-auto px-3 bg-secondary text-white h-10 ${
              landData && "hidden"
            } md:hidden rounded-xl place-items-center sm:cursor-pointer hover:bg-slate-200 transition-a dark:bg-card-dark`}
            onClick={() => dispatch(openFilterMenu())}
          >
            Rechercher
          </div>
        </div>
        {landData ? (
          <div className="w-[50%] md:w-[25%]">
            <select
              name=""
              id=""
              className="w-full px-3 py-2 bg-white border outline-none dark:border-dark dark:bg-main-dark"
              value={selectedType}
              onChange={handleChange}
            >
              <option value="all">Toutes Villes</option>
              {uniqueCity &&
                uniqueCity?.map((land, index) => (
                  <option key={index + 1} value={land}>
                    {land} ({sumUniqueCity[land]})
                  </option>
                ))}
            </select>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* <div className="w-full gap-4 flex-center-between hidden">
        <select
          name=""
          id=""
          className="w-full px-3 py-2 bg-white border outline-none dark:border-dark dark:bg-main-dark"
        >
          {landData &&
            landData?.map((land) => (
              <option key={land?._id} value={land?.city}>
                {land?.city}
              </option>
            ))}
        </select>
         <input
          type="text"
          className="border outline-none bg-transparent dark:border-dark px-3 py-[0.35rem] w-full"
          placeholder="Enter Keywords.."
        /> 
      </div> */}
    </div>
  );
};

export default HeadeFilters;
