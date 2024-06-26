import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";
import { baseUrl } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Filters = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState([]);
  const [propertyType, setPropertyType] = useState("");
  const [propertyStatus, setPropertyStatus] = useState("");
  const [city, setCity] = useState("");
  const [minPropertyPrice, setMinPropertyPrice] = useState(null);
  const [maxPropertyPrice, setMaxPropertyPrice] = useState(null);

  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setErrors(null);

    try {
      const res = await axios.get(`${baseUrl}/api/properties`);
      if (res) {
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
      setErrors("Error fetching data!!!");
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const uniquePropertyType = [
    ...new Set(data?.map((item) => item?.propertyType)),
  ];
  const uniqueCity = [...new Set(data?.map((item) => item?.city))];

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/api/properties`, {
        params: {
          propertyType,
          city,
          minPropertyPrice,
          maxPropertyPrice,
          propertyStatus,
        },
      });
      setLoading(false);
      console.log("Navigating with state:", { properties: response.data, loading: false });
      navigate("/results", {
        state: { properties: response.data, loading: false },
      });
    } catch (error) {
      setLoading(false);
      setErrors(error?.response?.data?.message);
      console.log("Navigating with state:", { properties: [], loading: false });
      navigate("/results", {
        state: { properties: [], loading: false },
      });
    }
  };
  
  return (
    <div className="md:max-w-[80%] w-full mx-auto relative">
      <form onSubmit={handleSearch}>
        <div className="flex-col bg-white gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row card card-shadow dark:shadow-none">
          <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
            <div className="flex-2 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
              <h1 className="font-bold">Type d'offre</h1>
              <div className="flex-align-center gap-x-2">
                <BiMap />
                <select
                  name=""
                  id=""
                  className="block w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
                  value={propertyStatus}
                  onChange={(e) => setPropertyStatus(e.target.value)}
                >
                  <option value="">Choisissez une option</option>
                  <option value="A Louer">A Louer</option>
                  <option value="A Vendre">A Vendre</option>
                </select>
              </div>
            </div>
            <div className="flex-2 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
              <h1 className="font-bold">Ville</h1>
              <div className="flex-align-center gap-x-2">
                <BiMap />
                <select
                  name=""
                  id=""
                  className="block w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Ville/Village</option>
                  {uniqueCity?.map((unique, index) => (
                    <option key={index + 1} value={unique}>
                      {unique}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex-2 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
              <h1 className="font-bold">Type de propriete</h1>
              <div className="flex-align-center gap-x-2">
                <BiBuildings />
                <select
                  name=""
                  id=""
                  className="block w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Choisissez un type</option>
                  {uniquePropertyType?.map((unique, index) => (
                    <option key={index + 1} value={unique}>
                      {unique}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex-2 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
              <h1 className="font-bold">Prix Minimum</h1>
              <div className="flex-align-center gap-x-2">
                <BiMoney />
                <input
                  type="number"
                  value={minPropertyPrice}
                  onChange={(e) => setMinPropertyPrice(e.target.value)}
                  min={0}
                  className="w-full bg-transparent border-0 outline-none"
                />
              </div>
            </div>
            <div className="flex-2 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
              <h1 className="font-bold">Prix Maximum</h1>
              <div className="flex-align-center gap-x-2">
                <BiMoney />
                <input
                  type="number"
                  value={maxPropertyPrice}
                  onChange={(e) => setMaxPropertyPrice(e.target.value)}
                  min={0}
                  className="w-full bg-transparent border-0 outline-none"
                />
              </div>
            </div>
          </div>
          {/* <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
              <h1 className="font-bold">Prix Minimum</h1>
              <div className="flex-align-center gap-x-2">
                <BiMoney />
                <input
                  type="number"
                  value={minPropertyPrice}
                  onChange={(e) => setMinPropertyPrice(e.target.value)}
                  min={0}
                  className="w-full bg-transparent border-0 outline-none"
                />
              </div>
            </div>

            <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
              <h1 className="font-bold">Prix Maximum</h1>
              <div className="flex-align-center gap-x-2">
                <BiMoney />
                <input
                  type="number"
                  value={maxPropertyPrice}
                  onChange={(e) => setMaxPropertyPrice(e.target.value)}
                  min={0}
                  className="w-full bg-transparent border-0 outline-none"
                />
              </div>
            </div>
          </div> */}
          <button type="submit" className="w-full btn btn-primary md:w-fit">
            {loading && <>...</>} search
          </button>
        </div>
      </form>
      {errors && <div className="error">{errors}</div>}
    </div>
  );
};

export default Filters;
