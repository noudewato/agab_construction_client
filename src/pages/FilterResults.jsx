import { useLocation } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import SingleHomeCard from "../components/common/page-componets/SingleProductCardFullWidth";
import { Filters } from "../components/home";
import Loader from "../components/common/Loader";

const FilterResults = ({ basis }) => {
  const location = useLocation();
  const { properties = [], loading = false } = location.state || {};

  return (
    <HomeLayout>
      <div className="pt-[120px] md:pt-[150px] px-[3%] md:px-[6%] pb-[5rem]">
        <h1 className="text-2xl text-center text-primary mt-[1rem] mb-[1rem] font-bold ">
          NOS PROPRIETES
        </h1>

        <div className="my-10">
          <Filters />
        </div>

        {loading ? (
          <div className="md:col-span-3  flex items-center min-h-fit justify-center">
          <Loader />
        </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
            {properties?.length > 0 ? (
              properties?.map((property) => (
                <SingleHomeCard
                  key={property._id}
                  {...property}
                  basis={basis}
                />
              ))
            ) : (
              <p>No properties found</p>
            )}
          </div>
        )}
      </div>
    </HomeLayout>
  );
};

export default FilterResults;
