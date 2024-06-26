/* eslint-disable jsx-a11y/anchor-is-valid */

import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-slate-200 pt-[5rem]">
      <footer className="pb-[2rem]">
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <Link to="/" className="flex-shrink-0 flex-align-center gap-x-1">
              <h1 className="hidden md:block text-xl">
                <img src="/agab.jpeg" alt="" width={"40px"} />
                <span className="text-primary">Agab</span>{" "}
                <span className="text-secondary">Construction</span>
              </h1>
            </Link>
            <div className="mt-3">
              <p className="text-sm">
                Nous vous offrons une expertise de premier plan dans la gestion
                immobilière et la vente de parcelles au Bénin, avec un
                engagement indéfectible envers la satisfaction client. Notre
                approche intègre une connaissance approfondie du marché local et
                un service personnalisé pour répondre efficacement à vos
                besoins immobiliers.
              </p>
              <div className="gap-5 my-6 flex-center-center">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FiFacebook />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaTwitter />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaInstagram />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Services</h2>
            <ul>
              <li className="my-3 text-muted">
                <Link  to="/services">Gestion immobilière</Link>
              </li>
              <li className="my-3 text-muted">
                <Link  to="/services">Quincaillerie générale</Link>
              </li>
              <li className="my-3 text-muted">
                <Link  to="/services">Conception et Architecture</Link>
              </li>
              <li className="my-3 text-muted">
                <Link  to="/services">Vente et achat des immeubles</Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Rapide Liens</h2>
            <ul>
              <li className="my-3 text-muted">
                <Link to="/home">Accueil</Link>
              </li>
              <li className="my-3 text-muted">
                <Link to="#">A propos</Link>
              </li>
              <li className="my-3 text-muted">
                <Link to="/services">Services</Link>
              </li>
              <li className="my-3 text-muted">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Business</h2>
            <ul>
              <li className="my-3 text-muted">
                <Link> Success</Link>
              </li>
              <li className="my-3 text-muted">
                <Link>Guide</Link>
              </li>
              <li className="my-3 text-muted">
                <Link>Mission</Link>
              </li>
              <li className="my-3 text-muted">
                <Link>Terms & Conditions</Link>
              </li>
              <li className="my-3 text-muted">
                <Link>Pricacy Policy</Link>
              </li>
            </ul>
          </div> */}

          {/* <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-muted">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="justify-center my-3 flex-align-center">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none bg-transparent rounded-lg border-dark"
                placeholder="Email Address.."
              />
              <button className="-ml-2 btn btn-primary">subscribe</button>
            </div>
          </div> */}
        </div>
      </footer>
      <div className="py-2 mt-3 text-center border-t text-muted border-dark">
        <p>
          Created By <span className="text-primary">Fawaz Noudewato</span> | All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
