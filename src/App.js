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
  LandForSellDetails,
  PropertyForRentDetails,
  PropertyForSellDetails,
  Realisation,
} from "./pages";
import FilterResults from "./pages/FilterResults";

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
      <Route path="/results" element={<FilterResults />} />
      <Route path="/boutique/:id" element={<QuincallerieItemPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portifolio" element={<Portifolio />} />
      <Route path="/portifolio-2" element={<PortifolioTwo />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
