import PropTypes from 'prop-types';
import "./buttonSliderSides.css";

function ButtonSliderSidesComponent({ handle, btnNumb, angle }) {
  return (
      <i className={`fa-solid fa-angle-${angle} slide-btn-${btnNumb}`} onClick={handle}></i>
  );
}

ButtonSliderSidesComponent.propTypes = {
  btnNumb: PropTypes.number.isRequired,
  angle: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default ButtonSliderSidesComponent;
