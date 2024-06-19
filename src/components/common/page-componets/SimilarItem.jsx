import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SimilarItem = ({ children }) => {
  const [isScroll, setIsscroll] = useState(false);
  const categoryContainer = useRef(null);
  const scrollContainer = (direction) => {
    direction === "right"
      ? (categoryContainer.current.scrollLeft += 400)
      : (categoryContainer.current.scrollLeft -= 400);
    categoryContainer.current.scrollLeft > 0
      ? setIsscroll(true)
      : setIsscroll(false);
  };
  return (
    <div>
      <div className="justify-end flex-align-center gap-x-3">
        <button
          className={`btn btn-primary !p-2 ${
            !isScroll && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => scrollContainer("left")}
        >
          <FiChevronLeft />
        </button>
        <button
          className="btn btn-primary !p-2"
          onClick={() => scrollContainer("right")}
        >
          <FiChevronRight />
        </button>
      </div>

      <div
        className="gap-3 mt-4 overflow-auto flex-align-center scroll-smooth hide-scrollbar"
        ref={categoryContainer}
      >
        {children}
      </div>
    </div>
  );
};

export default SimilarItem;
