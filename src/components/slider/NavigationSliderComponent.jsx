import PropTypes from "prop-types";
import BtnSliderNavComponent from "../button-slider-nav/BtnSliderNavComponent";
import "./slider.css"

function NavigationSliderComponent({ slideTo, fromData, navData }) {
  return (
    <div className="navigation-buttons">
      {navData[fromData].map((data, index) => (
        <BtnSliderNavComponent key={index} slideTo={() => slideTo(index)} data={data}/>
      ))}
    </div>
  );
}

NavigationSliderComponent.propTypes = {
  slideTo: PropTypes.func.isRequired,
  navData: PropTypes.object.isRequired, // Corregido para que `navData` sea un objeto
  fromData: PropTypes.string.isRequired, 
};

export default NavigationSliderComponent;
