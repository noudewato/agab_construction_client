import { useState } from "react";
import {
  HeadeFilters,
  Pagination,
  PropertyGridList,
} from "../components/common/page-componets";
import { parcelle } from "../data/dummyData";
import HomeLayout from "./HomeLayout";

const Parcelle = () => {
  const [layout, setLayout] = useState("list");
  return (
    <HomeLayout>
      <div className="pt-[120px] md:pt-[150px] px-[3%] md:px-[6%] pb-[5rem]">
        <div className="text-center mb-[3rem]">
          <h1 className="text-2xl text-primary mt-[1rem] mb-[1rem] font-bold ">
            NOS PARCELLES
          </h1>
          <h1 className="heading">
            Nous Disposons de bon parcelle abordable a bon prix.
          </h1>
        </div>
        <HeadeFilters layout={layout} setLayout={setLayout} />
        <PropertyGridList textLength={120} showLabels />
        <Pagination itemsPerPage={9} pageData={parcelle} />
      </div>
    </HomeLayout>
  );
};

export default Parcelle;
