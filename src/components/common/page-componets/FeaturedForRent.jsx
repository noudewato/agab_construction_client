import { location } from "../../../data/dummyData";
import SingleProductCard from "./SingleProductCard";
import Slider from "react-slick";

const FeaturedForRent = () => {
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
          borderRadius: "10px"
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
    <div className="pb-10">
      <div className="text-center mb-[2rem]">
        <h1 className="sub-heading mx-auto text-2xl text-primary mb-[1rem] font-bold ">
          Nos Proprietes En Location
        </h1>
        <h1 className="heading">
          Découvrez nos offres spéciales de villa, maison, appartement, terrain,
          immeuble, bureau, boutique et magasin en Location .
        </h1>
      </div>
      {/* <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3"> */}

      <Slider {...settings}>
        {location.slice(0, 9).map((featured) => (
          <SingleProductCard key={featured.id} {...featured} />
        ))}
      </Slider>

      {/* </div> */}
    </div>
  );
};

export default FeaturedForRent;
