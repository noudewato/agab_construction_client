import { BiMap } from "react-icons/bi";
import { FiMail, FiPhone } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-6 py-16 sm:grid-cols-2 md:grid-cols-3">
      <div className="text-center">
        <div className="icon-box !h-14 !w-14 !bg-primary text-white mx-auto text-2xl">
          <FiPhone />
        </div>
        <h1 className="mt-2 text-lg font-semibold">Telephone</h1>
        <a href="tel:+22966551600"> (+229) 66551600</a> <br />
        <a href="https://wa.me/+22996661896">(+229) 96661896</a>
      </div>
      <div className="text-center">
        <div className="icon-box !h-14 !w-14 !bg-primary text-white mx-auto text-2xl">
          <FiMail />
        </div>
        <h1 className="mt-2 text-lg font-semibold">Email Address</h1>
        <a href="$">agabconstruction@gmail.com</a><br />
        <a href="mailto:faridomotayebi@gmail.com">faridomotayebi@gmail.com</a>
      </div>
      <div className="text-center">
        <div className="icon-box !h-14 !w-14 !bg-primary text-white mx-auto text-2xl">
          <BiMap />
        </div>
        <h1 className="mt-2 text-lg font-semibold">Office Address</h1>
        <p>Avotrou CS LA GRACE COTONOU</p>
        <p>Rue 1316B, Cotonou, Bénin</p>
      </div>
    </div>
  );
};

export default ContactInfo;
