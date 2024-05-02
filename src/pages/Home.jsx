import {
  Counter,
  FeaturedForSell,
  FeaturedForRent,
  Projects,
  FeaturedLand,
  BoutiqueItem,
} from "../components/common/page-componets";
import {
  Feeds,
  Filters,
  Hero,
  Speciality,
} from "../components/home/home-1";
import Specialite from "../components/home/home-1/Specialite";
import HomeLayout from "./HomeLayout"

const Home = () => {
  return (
    <HomeLayout>
      <div className="pt-[3rem]">
        <Hero />
        <div className="pt-16 px-[3%] md:px-[6%]">
          <Filters />
          {/* <Invest /> */}
          <Speciality />
          <Specialite />
          {/* <Services /> */}
          <FeaturedForSell />
          <FeaturedForRent />
          <FeaturedLand />
          <Counter />
          <BoutiqueItem />
          <Projects />
          {/* <Testimonial />
      <Brands /> */}
          <Feeds />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;