/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { metiers } from "../../../data/dummyData";
import HorizontalScroll from "./HorizontalScroll";

const ServiceComponent = () => {
  const [selectedMetier, setSelectedMetier] = useState(null);
  const [loadingDelay, setLoadingDelay] = useState(false);

  useEffect(() => {
    if (metiers?.length > 0 && selectedMetier === null) {
      setSelectedMetier(metiers[0]);
    }
  }, [metiers, selectedMetier]);

  const handleMetierClick = (metier) => {
    setLoadingDelay(true);
    setSelectedMetier(metier);
    setTimeout(() => {
      setLoadingDelay(false);
    }, 1000);
  };

  const filteredMetier = metiers?.filter((metier) => metier === selectedMetier);

  return (
    <div className="pt-2 pb-4 mb-[5rem]">
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-3"></div>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1 block">
          <nav class="block  space-y-3">
            <HorizontalScroll
              metiers={metiers}
              selectedMetier={selectedMetier}
              handleMetierClick={handleMetierClick}
            />
          </nav>
        </div>
        <div className="md:col-span-3 bg-white rounded-lg">
          {filteredMetier?.map((item) => (
            <div key={item?.id} className="text-2xl font-bold text-center mt-4">
              {item?.name}
            </div>
          ))}
          <div className="  relative overflow-hidden text-center bg-white p-2 md:p-5 rounded-lg">
            {filteredMetier?.map((metier) => (
              <div key={metier?.id}>
                <div className="mb-5 text-lg md:text-2xl">
                  {metier?.description}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-y-5 md:gap-4 w-full ">
                  {metier?.image?.map((img, index) => (
                    <div className="cursor-pointer group overflow-hidden relative
                    ">
                      <img
                        className="h-[400px] w-full rounded-lg object-cover group-hover:scale-125 transition-a"
                        src={img}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
