import "./gearBtn.css";
import PropTypes from "prop-types";

function GearBtnComponent({ showDayNight, handleShowDayNight }) {
  return (
    <i
      className={showDayNight ? `fa-solid fa-gear fa-spin` : `fa-solid fa-gear`}
      style={{ color: "var(--white)" }}
      onClick={() => handleShowDayNight()}
    ></i>
  );
}

GearBtnComponent.propTypes = {
  showDayNight: PropTypes.bool.isRequired, // Cambiado a boolean
  handleShowDayNight: PropTypes.func.isRequired,
};

export default GearBtnComponent;
