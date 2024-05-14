import React from "react";
import { Link } from "react-router-dom";

const Specialite = () => {
  return (
    <div className="">
      <div className="text-center my-[2rem]">
        <h1 className="sub-heading mx-auto">Nos Services</h1>
        <h1 className="heading">
          Nos Meilleurs Offres de Services A ne Pas Rater
        </h1>
      </div>
      <div className="deals w-full  grid lg:grid-flow-col grid-row-2  gap-8">
        <div className="deal cursor-pointer overflow-hidden relative col-span-2 row-span-2 w-full group">
          <Link to="/services">
            <img
              src="https://www.gabylefloch.fr/ressources/images/c58f2b3f2d67.jpg"
              alt="img"
              className="rounded-xl w-full h-full object-cover group-hover:scale-125 transition-a"
            />
            <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
              <h1 className="text-3xl font-bold">
                Maçonnerie - <span className="text-secondary">Béton</span>{" "}
              </h1>
            </div>
          </Link>
        </div>
        <div className="deal cursor-pointer overflow-hidden relative col-span-1 row-span-1 w-full group">
          <Link to="/services">
            <img
              src="https://www.lbf-labelfenetres.com/s/cc_images/teaserbox_3507148.jpg?t=1441814753"
              alt="img"
              className="rounded-xl w-full h-full object-cover group-hover:scale-125 transition-a"
            />
            <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
              <h1 className="text-xl font-bold">
                Menuiseries{" "}
                <span className="text-secondary">PVC Aluminium</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="deal cursor-pointer overflow-hidden relative col-span-1 row-span-1 w-full group">
          <Link to="/services">
            <img
              src="https://www.afkor.be/media/1111/detailurinoirdsc3648-bewerkt-dgrijsappel-orig-resized.jpg?center=0.49400479616306953,0.38&mode=crop&width=480&height=300&rnd=132744471500000000 "
              alt="img"
              className="rounded-xl w-full h-full object-cover group-hover:scale-125 transition-a"
            />
            <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
              <h1 className="text-xl font-bold">
                Cloisons <span className="text-secondary">Sanitaires</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="deal cursor-pointer overflow-hidden relative  col-span-1 row-span-1 w-full group">
          <Link to="/services">
            <img
              src="https://i.ytimg.com/vi/U9XouBKuFCs/maxresdefault.jpg"
              alt="img"
              className="rounded-xl w-full h-full object-cover group-hover:scale-125 transition-a"
            />
            <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
              <h1 className="text-xl font-bold">
                Carrelages <span className="text-secondary">& Pierres</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="deal cursor-pointer overflow-hidden relative col-span-1 row-span-1 w-full group">
          <Link to="/services">
            <img
              src="https://www.homeinstal.fr/library/media/images/user/background/charpente.jpg"
              alt="img"
              className="rounded-xl w-full h-full object-cover group-hover:scale-125 transition-a"
            />
            <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
              <h1 className="text-xl font-bold">
                Charpente <span className="text-secondary">& Couverture</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="deal cursor-pointer overflow-hidden relative col-span-1 row-span-1 w-full group">
          <Link to="/services">
            <img
              src="https://www.pfm13.fr/wp-content/uploads/2022/03/avantPFM.jpg"
              alt="img"
              className="rounded-xl w-full h-fit object-cover group-hover:scale-125 transition-a"
            />
            <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
              <h1 className="text-xl font-bold">
                Rénovation <span className="text-secondary">façade</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="deal cursor-pointer overflow-hidden relative col-span-1 row-span-1 w-full group">
          <Link to="/services">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCRiAs2D6SN-dL5hok-ao8_owy9JTv9ulhP-20HPDq3ra_0gCmBGw8Lhi0uWcqHfJNh0&usqp=CAU"
              alt=""
              className="rounded-xl w-full h-fit object-cover group-hover:scale-125 transition-a"
            />
            <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
              <h1 className="text-xl font-bold">
                Peinture & <span className="text-secondary">Decoration</span>
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Specialite;
