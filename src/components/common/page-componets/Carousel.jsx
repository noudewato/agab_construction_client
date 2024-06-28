import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  //  useEffect(() => {
  //    const intervalId = setInterval(() => {
  //      // Increment the current index with wrap-around logic
  //      setIndex((prevStep) => (prevStep + 1) % images.length);
  //    }, 3000); // Adjust the interval as needed

  //    return () => clearInterval(intervalId);
  //  }, [index, images.length]);

  return (
    <div className="container">
      <div className="m-auto relative w-full h-full overflow-hidden aspect-[16/9]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            src={images[index]}
            alt="slides"
            className="absolute top-0 left-0 w-full h-[400px] object-cover object-center"
            key={images[index]}
            custom={direction}
          />
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevStep}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <BiChevronLeft size={20} />
          </button>
          <button
            onClick={nextStep}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <BiChevronRight size={20} />
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {images?.map((_, i) => (
              <div
                key={i}
                className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${index === i ? "p-2" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
