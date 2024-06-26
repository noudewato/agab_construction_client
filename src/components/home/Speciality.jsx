import { FiCheck, FiLayers, FiUsers } from "react-icons/fi";

const Speciality = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="flex flex-wrap gap-10">
        <div className="flex-1 basis-[20rem]">
          <h1 className="sub-heading">A Propos</h1>
          <h1 className="heading">
            Nous sommes spécialisés dans la rénovation domiciliaire de qualité
          </h1>
          <p className="mt-3">
            Avec des décennies d'expérience dans l'industrie, nous avons les
            connaissances et les compétences nécessaires pour garantir le succès
            de votre entreprise. Faites confiance à notre engagement envers
            l'excellence et laissez-nous transformer vos idées en réalité.
          </p>
          <div className="mt-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Propriété exceptionnelle</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Ressource humaine professionnelle et expérimentée</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Nous fournissons les meilleurs services aux utilisateurs</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>
                Des emplacements urbains modernes et un style de vie
                exceptionnel
              </p>
            </div>
            <button className="mt-4 btn btn-primary">savoir plus</button>
          </div>
        </div>
        <div className="flex-1 basis-[20rem]">
          <div className="relative">
            <img
              src="https://media-cdn.tripadvisor.com/media/vr-splice-j/05/d1/e2/ba.jpg"
              alt=""
              className="rounded-lg w-full sm:h-[400px] object-cover"
            />
            <div className="absolute -bottom-10 sm:bottom-5 -left-2 md:-left-20">
              <div className="p-3 bg-white rounded-lg shadow-md w-72 flex-center-between gap-x-3 dark:bg-dark-light">
                <h1>Plus de 10ans nous servons nos clients</h1>
                <div className="icon-box text-primary !bg-primary/20">
                  <FiUsers />
                </div>
              </div>
              <div className="p-3 mt-4 ml-8 bg-white rounded-lg shadow-md w-72 flex-center-between gap-x-3 dark:bg-dark-light">
                <h1>
                  Nous travaillons avec le symbole et la réputation d'un trait
                  de confiance
                </h1>
                <div className="icon-box text-primary !bg-primary/20">
                  <FiLayers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
