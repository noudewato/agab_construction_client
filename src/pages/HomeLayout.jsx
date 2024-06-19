import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import BackToTopButton from "../components/common/BackToTopButton";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { closeDropdown } from "../features/uiSlice";
import Dropdown from "../components/common/DropDown";
import Loader from "../components/common/Loader";

const HomeLayout = ({ children }) => {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(true); // Initially show the loader
  const dispatch = useDispatch();
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = () => {
    dispatch(closeDropdown());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  useEffect(() => {
    // Hide the loader after 3000 milliseconds (3 seconds)
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="bg-slate-100">
      <Navbar />
      <Dropdown />

      <div
        className="min-h-screen"
        onClick={handleCloseDropdown}
        onMouseOver={handleCloseDropdown}
      >
        {showLoader ? <Loader /> : children}
      </div>
      <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark">
        <Footer />
      </div>
      <BackToTopButton showButton={showButton} />
    </div>
  );
};

export default HomeLayout;
