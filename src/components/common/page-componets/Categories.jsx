import { useRef, useState } from "react";
import { metiers } from "../../../data/dummyData";
import HeroCarousel from "./HeroCarousel";

const Categories = () => {
  const categoryContainer = useRef(null);
  const [isScroll, setIsscroll] = useState(false);
  const scrollContainer = (direction) => {
    direction === "right"
      ? (categoryContainer.current.scrollLeft += 200)
      : (categoryContainer.current.scrollLeft -= 200);
    categoryContainer.current.scrollLeft > 0
      ? setIsscroll(true)
      : setIsscroll(false);
  };

  const maconnerieImages = [
    "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/69483/pexels-photo-69483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7931/pexels-photo-7931.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://th.bing.com/th/id/R.e054dcb8fc366e54aa8688500adbc74a?rik=pHkoKzOxLo%2f7zA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f0%2f06%2fPumping_concrete_archives_of_ontario_york_university_construction_jan08.jpg&ehk=7FgweV3Mke1%2bhiXlHnR2MOYQUuM41aeF80By5xUb65w%3d&risl=1&pid=ImgRaw&r=0",
  ];

  const initialCategory = metiers.length > 0 ? metiers[0].name : null;
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const handleCategoryChange = (name) => {
    setSelectedCategory(name);
  };

  const remainingItems = selectedCategory
    ? metiers.slice(1).filter((metier) => metier.name === selectedCategory)
    : metiers.slice(1);

  return (
    <div className="pt-2 pb-4 mb-[5rem]">
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-1 md:grid-cols-4">
        {/* <div className="md:col-span-1">
          <nav class="flex flex-col space-y-3">
            {metiers.map((metier) => (
              <a
                href="#"
                class="font-semibold tracking-wider text-gray-600 hover:text-primary"
                key={metier.id}
              >
                {metier.name}
              </a>
            ))}
          </nav>
        </div> */}
        <div className="md:col-span-3">
          {/* <div className="justify-end flex-align-center gap-x-3">
            <button
              className={`btn btn-secondary !p-2 ${
                !isScroll && "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => scrollContainer("left")}
            >
              <FiChevronLeft />
            </button>
            <button
              className="btn btn-secondary !p-2"
              onClick={() => scrollContainer("right")}
            >
              <FiChevronRight />
            </button>
          </div> */}
          {/* <div
            className="gap-3 mt-4 overflow-auto flex-align-center scroll-smooth hide-scrollbar"
            ref={categoryContainer}
          >
            {metiers.map(({ id, name, number, image }) => (
              <div
                key={id}
                className="relative flex-shrink-0 w-[300px] group rounded-lg overflow-hidden"
              >
                <div className="overflow-hidden rounded-lg">
                  <Link className="!opacity-100">
                    <img
                      src={image}
                      alt={name}
                      className="w-full  h-[150px] object-cover group-hover:scale-125 transition-a"
                    />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 text-slate-100 to-transparent">
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <p>{number} buildings</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-16 sm:grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1">
          <nav class="flex flex-col space-y-3">
            {Array.from(new Set(metiers.map((metier) => metier.name))).map(
              (name, metier) => (
                <a
                  key={metier.id}
                  className={`${
                    selectedCategory === name
                      ? "text-primary"
                      : "font-semibold tracking-wider text-gray-600"
                  } font-semibold tracking-wider text-gray-600 cursor-pointer hover:text-primary`}
                  onClick={() => handleCategoryChange(name)}
                >
                  {name}
                </a>
              )
            )}
            {/* {metiers.map((metier) => (
              <
              >
                {metier.name}
              </>
            ))} */}
          </nav>
        </div>
        <div className="md:col-span-3">
          {/* <div className="justify-end flex-align-center gap-x-3">
            <button
              className={`btn btn-secondary !p-2 ${
                !isScroll && "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => scrollContainer("left")}
            >
              <FiChevronLeft />
            </button>
            <button
              className="btn btn-secondary !p-2"
              onClick={() => scrollContainer("right")}
            >
              <FiChevronRight />
            </button>
          </div> */}
          {/* <div
            className="gap-3 mt-4 overflow-auto flex-align-center scroll-smooth hide-scrollbar"
            ref={categoryContainer}
          >
            {metiers.map(({ id, name, number, image }) => (
              <div
                key={id}
                className="relative flex-shrink-0 w-[300px] group rounded-lg overflow-hidden"
              >
                <div className="overflow-hidden rounded-lg">
                  <Link className="!opacity-100">
                    <img
                      src={image}
                      alt={name}
                      className="w-full  h-[150px] object-cover group-hover:scale-125 transition-a"
                    />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 text-slate-100 to-transparent">
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <p>{number} buildings</p>
                </div>
              </div>
            ))}
          </div> */}
          {/* <div className="relative overflow-hidden">
            {remainingItems.map((image, index) => (
              <HeroCarousel autoSlide={true} key={index}>
                {image?.map((myImage) => (
                  <div
                    className="services-carousel z-0 flex-center-center px-[3%] md:px-[6%]"
                    style={{
                      backgroundImage: `url('${myImage}')`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      minWidth: "100%",
                    }}
                  ></div>
                ))}
              </HeroCarousel>
            ))}
          </div> */}
          <div className="relative overflow-hidden">
            {remainingItems.map((item) => (
              <HeroCarousel autoSlide={true}>
                {item?.image?.map((myImage) => (
                  <div
                    className="services-carousel z-0 flex-center-center px-[3%] md:px-[6%]"
                    style={{
                      backgroundImage: `url('${myImage}')`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      minWidth: "100%",
                    }}
                  ></div>
                ))}
              </HeroCarousel>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
