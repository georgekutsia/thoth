
import "./gearBtng.css"
import PropTypes from "prop-types";

function GearBtnComponent({showDayNight, handleShowDayNight}) {
  return (
    <i className={ showDayNight ? `fa-solid fa-gear fa-spin`:`fa-solid fa-gear`} style={{color:"var(--grey)"}} onClick={()=>handleShowDayNight()}></i>

  )
}

GearBtnComponent.propTypes = {
  showDayNight: PropTypes.string.isRequired,
  handleShowDayNight: PropTypes.func.isRequired,
};

export default GearBtnComponent