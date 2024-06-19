import { useEffect, useState } from "react";
import SingleProductCard from "./SingleProductCard";
import Slider from "react-slick";
import axios from "axios";
import { baseUrl } from "../../../services/api";
import Loader from "../Loader";

const FeaturedForSell = () => {
  const [buyData, setBuyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setErrors(null);
    axios
      .get(`${baseUrl}/api/properties`)
      .then((res) => setBuyData(res.data))
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

  const filteredData = buyData?.filter(
    (item) => item.propertyStatus === "A Vendre"
  );

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#0572f7",
          borderRadius: "10px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#0572f7",
          borderRadius: "10px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-7 my-[2rem]">
      <div className="text-center my-[2rem]">
        <h1 className="sub-heading mx-auto text-primary my-[1.5rem] font-bold ">
          Nos Proprietes En Vente
        </h1>
        <h1 className="heading">
          Découvrez une gamme diversifiée d'immeubles à vendre, soigneusement
          sélectionnés pour leur qualité et leur valeur. Que vous recherchiez
          {/* une propriété résidentielle ou commerciale, nous avons ce qu'il vous
          faut. Notre équipe professionnelle est là pour vous guider à travers
          le processus d'achat, en fournissant des conseils avisés et un service
          personnalisé à chaque étape. Investissez dans l'avenir avec notre
          sélection d'immeubles de qualité supérieure */}
        </h1>
      </div>
      {loading ? (
        <Loader />
      ) : errors ? (
        <div>{errors}</div>
      ) : (
        <Slider {...settings}>
          {filteredData?.map((featured) => (
            <SingleProductCard key={featured.id} {...featured} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default FeaturedForSell;
