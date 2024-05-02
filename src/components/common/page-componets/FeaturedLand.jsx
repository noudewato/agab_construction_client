import { parcelle } from "../../../data/dummyData";
import SingleProductCard from "./SingleProductCard";
import Slider from "react-slick";

const FeaturedLand = () => {
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
          Découvrez nos offres spéciales de parcelles disponibles dans differentes localites et abordable a bon prix.
        </h1>
      </div>
      {/* <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3"> */}

      <Slider {...settings}>
        {parcelle.slice(0, 9).map((featured) => (
          <SingleProductCard key={featured.id} {...featured} />
        ))}
      </Slider>

      {/* </div> */}
    </div>
  );
};

export default FeaturedLand;
