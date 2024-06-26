import React, { useEffect, useState } from "react";
import { HeadeFilters, Pagination, PropertyGridList } from "../components/common/page-componets";
import HomeLayout from "./HomeLayout";
import axios from "axios";
import { baseUrl } from "../services/api";
import Loader from "../components/common/Loader";

const Parcelle = () => {
  const [landData, setLandData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  const fetchData = () => {
    setLoading(true);
    setErrors(null);
    axios
      .get(`${baseUrl}/api/landProperties`)
      .then((res) => {
        setLandData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => {
        console.log(`data not found ${err}`);
        setErrors("Error while fetching data!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const uniqueCity = [...new Set(landData?.map((land) => land?.city))];

  const sumUniqueCity = landData?.reduce((acc, item) => {
    acc[item.city] = (acc[item.city] || 0) + 1;
    return acc;
  }, {});

  const [layout, setLayout] = useState("list");

  const handleChange = (e) => {
    const selectedType = e.target.value;
    setSelectedType(selectedType);

    if (selectedType === "all") {
      setFilteredData(landData);
    } else {
      const filtered = landData?.filter((item) => item.city === selectedType);
      setFilteredData(filtered);
    }
  };

  return (
    <HomeLayout>
      <div className="pt-[120px] md:pt-[150px] px-[3%] md:px-[6%] pb-[5rem]">
        <div className="text-center mb-[3rem]">
          <h1 className="text-2xl text-primary mt-[1rem] mb-[1rem] font-bold">
            NOS PARCELLES
          </h1>
          <h1 className="heading">
            Explorez notre vaste sélection de terrains à vendre, conçue pour
            répondre à vos besoins uniques. Avec notre expertise en immobilier,
            nous vous guiderons dans la recherche de votre parcelle idéale.
            Faites le premier pas vers la réalisation de votre projet en
            parcourant notre catalogue dès aujourd'hui. Contactez-nous pour des
            conseils personnalisés et une assistance professionnelle tout au
            long du processus.
          </h1>
        </div>
        {loading ? (
          <Loader />
        ) : errors ? (
          <>{errors}</>
        ) : (
          <div>
            <HeadeFilters
              landData={filteredData}
              layout={layout}
              setLayout={setLayout}
              uniqueCity={uniqueCity}
              sumUniqueCity={sumUniqueCity}
              selectedType={selectedType}
              handleChange={handleChange}
            />
            <PropertyGridList textLength={120} showLabels />
            <Pagination itemsPerPage={9} pageData={filteredData} />
          </div>
        )}
      </div>
    </HomeLayout>
  );
};

export default Parcelle;
