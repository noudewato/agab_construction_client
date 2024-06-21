import {
  Categories,
  Services as ServicesList,
} from "../components/common/page-componets";
import ImageGallery from "../components/common/page-componets/ImageGallery";
import ServiceComponent from "../components/common/page-componets/ServiceComponent";
import HomeLayout from "./HomeLayout";

const Services = () => {
  return (
    <HomeLayout>
      <div className="pt-20 px-[3%] md:px-[6%]">
        <ServicesList />
        {/* <Categories /> */}
        <ServiceComponent />
        {/* <ImageGallery/> */}
      </div>
    </HomeLayout>
  );
};

export default Services;
