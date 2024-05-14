import { ContactInfo, Form, Map } from "../components/contact";
import HomeLayout from "./HomeLayout";

const Contact = () => {
  return (
    <HomeLayout>
      <div className="pt-[120px] md:pt-[150px] px-[3%] md:px-[6%]">
        <div className="text-center mb-[3rem]">
          <h1 className="text-2xl text-primary mb-[1rem] font-bold ">
            Veuillez nous contactez
          </h1>
        </div>
        <Map />
        <ContactInfo />
        <Form />
      </div>
    </HomeLayout>
  );
};

export default Contact;
