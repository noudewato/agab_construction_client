import "./scroll.css"
const HorizontalScroll = ({
  metiers,
  handleMetierClick,
  selectedMetier,
}) => {
  return (
    <div className="horizontal-scroll">
      <div className="menu-items">
        {metiers?.map((metier) => (
          <div
            key={metier?.id}
            className={`menu-item ${
              metier === selectedMetier ? "active" : ""
            }`}
            onClick={() => handleMetierClick(metier)}
          >
            {metier?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
