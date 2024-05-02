{
    // category scroller
  /* <div className="md:col-span-4">
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
                {maison.map((myBoutique) => (
                  <div
                    key={myBoutique.id}
                    className="relative flex-shrink-0 w-[400px] group rounded-lg overflow-hidden"
                  >
                    <SingleHomeCard
                      key={myBoutique.id}
                      {...myBoutique}
                      basis={basis}
                    />
                  </div>
                ))}
              </div>
            </div> */
    
    // const categoryContainer = useRef(null);

    // const [isScroll, setIsscroll] = useState(false);
    // const scrollContainer = (direction) => {
    //   direction === "right"
    //     ? (categoryContainer.current.scrollLeft += 200)
    //     : (categoryContainer.current.scrollLeft -= 200);
    //   categoryContainer.current.scrollLeft > 0
    //     ? setIsscroll(true)
    //     : setIsscroll(false);
    // };
}
