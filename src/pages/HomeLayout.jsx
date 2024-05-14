import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import BackToTopButton from "../components/common/BackToTopButton";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { closeDropdown } from "../features/uiSlice";
import Dropdown from "../components/common/DropDown";
import Loader from "../components/common/Loader";
const HomeLayout = ({children}) => {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Loader when page is loading
  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <div className="bg-slate-100">
      {showLoader && <Loader />}
      <Navbar />
      <Dropdown />
      <div
        className="min-h-screen"
        onClick={handleCloseDropdown}
        onMouseOver={() => dispatch(closeDropdown())}
      >
        {children}
      </div>
      <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark">
        <Footer />
      </div>
      <BackToTopButton showButton={showButton} />
    </div>
  );
};

export default HomeLayout;
