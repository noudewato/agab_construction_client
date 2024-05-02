import { ContactInfo, Form, Map } from "../components/contact";
import HomeLayout from "./HomeLayout";

const Contact = () => {
  return (
    <HomeLayout>
      <div className="pt-20 mt-[50px] px-[3%] md:px-[6%]">
        <Map />
        <ContactInfo />
        <Form />
      </div>
    </HomeLayout>
  );
};

export default Contact;
