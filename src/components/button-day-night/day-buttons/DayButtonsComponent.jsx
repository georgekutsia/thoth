import "./dayButtons.css";
import PropTypes from "prop-types";

function DayButtonsComponent({ option, handleClick, aosDelay }) {
  return (
    <button
      data-aos="flip-right"
      data-aos-delay={aosDelay}
      className="day-btns"
      data-aos-offset="50"
      onClick={() => handleClick()}
      style={{backgroundColor: option}}
    >
    </button>
  );
}
DayButtonsComponent.propTypes = {
  option: PropTypes.string.isRequired,
  aosDelay: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default DayButtonsComponent;
