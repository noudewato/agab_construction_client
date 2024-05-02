import { Routes, Route } from "react-router-dom";
import {
  Services,
  Alouer,
  Contact,
  Portifolio,
  PortifolioTwo,
  PageNotFound,
  Home,
  Avendre,
  Parcelle,
  Quincallerie,
  QuincallerieItemPage,
} from "./pages";
import Realisation from "./pages/Realisation";
import PropertyForSellDetails from "./pages/PropertyForSellDetails";
import PropertyForRentDetails from "./pages/PropertyForRentDetails";
import LandForSellDetails from "./pages/LandForSellDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/realisations" element={<Realisation />} />
      <Route path="/services" element={<Services />} />
      <Route path="/a-vendre" element={<Avendre />} />
      <Route path="/a-vendre/:id" element={<PropertyForSellDetails />} />
      <Route path="/a-louer" element={<Alouer />} />
      <Route path="/a-louer/:id" element={<PropertyForRentDetails />} />
      <Route path="/parcelle" element={<Parcelle />} />
      <Route path="/parcelle/:id" element={<LandForSellDetails />} />
      <Route path="/boutique" element={<Quincallerie />} />
      <Route path="/boutique/:id" element={<QuincallerieItemPage />} />
      {/* <Route path="/property-6" element={<PropertySix />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/portifolio" element={<Portifolio />} />
      <Route path="/portifolio-2" element={<PortifolioTwo />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
