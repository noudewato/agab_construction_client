import axios from "axios";
import FeaturedLandCard from "./FeaturedLandCard";
import Slider from "react-slick";
import { baseUrl } from "../../../services/api";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const FeaturedLand = () => {
  const [landData, setLandData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setErrors(null);
    axios
      .get(`${baseUrl}/api/landProperties`)
      .then((res) => setLandData(res.data))
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
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="pb-16">
      <div className="text-center my-[2rem]">
        <h1 className="text-2xl sub-heading mx-auto text-primary mt-[1rem] mb-[1rem] font-bold ">
          Nos Parcelles
        </h1>
        <h1 className="heading">
          Explorez notre vaste sélection de terrains à vendre, conçue pour
          répondre à vos besoins uniques. Avec notre expertise en immobilier,
          nous vous guiderons dans la recherche de votre parcelle idéale. Faites
          le premier pas vers la réalisation de votre projet en parcourant notre
          catalogue dès aujourd'hui. Contactez-nous pour des conseils
          personnalisés et une assistance professionnelle tout au long du
          processus.
        </h1>
      </div>
      {loading ? (
        <Loader />
      ) : errors ? (
        <div>{errors}</div>
      ) : (
        <Slider {...settings}>
          {landData?.map((featured) => (
            <FeaturedLandCard key={featured.id} {...featured} />
          ))}
        </Slider>
      )}

      {/* </div> */}
    </div>
  );
};

export default FeaturedLand;
