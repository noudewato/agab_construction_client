import {
  Categories,
  Services as ServicesList,
} from "../components/common/page-componets";
import HomeLayout from "./HomeLayout";

const Services = () => {
  return (
    <HomeLayout>
      <div className="pt-20 px-[3%] md:px-[6%]">
        <ServicesList />
        <Categories />
      </div>
    </HomeLayout>
  );
};

export default Services;
