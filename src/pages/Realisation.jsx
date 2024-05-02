import React from "react";
import HeroCarousel from "../components/common/page-componets/HeroCarousel";
import { projects } from "../data/dummyData";
import HomeLayout from "./HomeLayout";

const Realisation = () => {
  return (
    <HomeLayout>
      <div className="px-[3%] md:px-[6%] mt-[120px]">
        <div className="text-center mb-[3rem]">
          <h1 className="text-2xl text-primary mb-[1rem] font-bold ">
            Nos Realistions
          </h1>
          <h1 className="heading">
            Agab Construction a réalisé plusieurs projets de construction,
            renovation de maison de haute qualité, répondant aux normes les plus
            élevées.
          </h1>
        </div>
        {projects.map((project) => (
          <div key={project.id}>
            <h1 className="text-2xl my-[2rem] font-bold text-center">
              {project.name}
            </h1>
            <div className="relative overflow-hidden">
              <HeroCarousel autoSlide={true}>
                {project.image.map((projectImage, index) => (
                  <div
                    className="services-carousel z-0 flex-center-center px-[3%] md:px-[6%]"
                    key={index}
                    style={{
                      backgroundImage: `url('${projectImage}')`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      minWidth: "100%",
                    }}
                  ></div>
                ))}
              </HeroCarousel>
            </div>
          </div>
        ))}
      </div>
    </HomeLayout>
  );
};

export default Realisation;
