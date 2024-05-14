import Slider from "../common/page-componets/SliderItem";

const Hero = () => {
  const heroBackgroundImage = [
    {
      id: 1,
      title: "construction",
      subtitle: "generale",
      image:
        "https://images.pexels.com/photos/2323080/pexels-photo-2323080.jpeg",
    },
    {
      id: 2,
      title: "conception",
      subtitle: "architecturale",
      image:
        "https://images.pexels.com/photos/6615190/pexels-photo-6615190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Renovation",
      subtitle: "des maisons et bureaux",
      image:
        "https://images.pexels.com/photos/4567374/pexels-photo-4567374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Location des",
      subtitle: "appartements de luxe",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/b4/78/d9/mer.jpg?w=700&h=-1&s=1",
    },
    {
      id: 5,
      title: "Vente des",
      subtitle: "maisons de toute sorte",
      image:
        "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      title: "des Parcelles",
      subtitle: "disponible a bon prix",
      image:
        "https://benin-immo.com/wp-content/uploads/2022/12/terrains_a_vendre_au_benin.jpg",
    },
  ];
  return (
    <Slider>
      {heroBackgroundImage.map((item) => (
        <Slider.Item key={item.id}>
          <div
            className="hero z-0 md:-mt-10 flex-center-center px-[3%] md:px-[6%]"
            style={{
              backgroundImage: `url('${item?.image}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              minWidth: "100%",
              marginTop: "3rem",
            }}
          >
            <div className="p-10 md:w-[100%] mx-[3%] md:mx-[6%] bg-lightDark">
              <h1 className="text-4xl font-bold capitalize md:text-7xl text-white">
                {item?.title} <br />
                {item?.subtitle}
              </h1>
              <div className="pl-3 mt-5 border-l-4 border-secondary text-white text-lg">
                <p>
                  Spécialiste de la construction de maisons individuelles, nous
                  sommes à votre disposition pour tous types de projet. Moderne,
                  classique, contemporaine.
                  {/* Votre maison sera conçue sur mesure.
                  Lors de la construction, nous prenons en considération vos
                  exigences et vos possibilités financières. */}
                  {/* <br /> N’hésitez
                  pas à nous faire part de vos préférences et de vos envies,
                  nous vous assurons un résultat de qualité. */}
                </p>
              </div>
              <button className="mt-6 btn btn-primary cursor-pointer">
                get started
              </button>
            </div>
            {/* <div className="flex-1 basis-[20rem]">
        <img src="/images/hero-4.png" alt="" className="w-full" />
      </div> */}
          </div>
        </Slider.Item>
      ))}
    </Slider>
  );
};

export default Hero;
