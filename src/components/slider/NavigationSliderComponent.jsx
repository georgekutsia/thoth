import PropTypes from "prop-types";
import BtnSliderNavComponent from "../button-slider-nav/BtnSliderNavComponent";
import "./slider.css";

function NavigationSliderComponent({ slideTo, fromData, navData }) {
  return (
    <div className="navigation-buttons">
      {navData[fromData].map((data, index) => {
        const icon = index === 0 ? "fa-location-dot" : `fa-${index}`;
        return (
          <BtnSliderNavComponent
            key={index}
            slideTo={() => slideTo(index)}
            data={data}
            icon={icon} 
          />
        );
      })}
    </div>
  );
}

NavigationSliderComponent.propTypes = {
  slideTo: PropTypes.func.isRequired,
  navData: PropTypes.object.isRequired, // Corregido para que `navData` sea un objeto
  fromData: PropTypes.string.isRequired, 
};

export default NavigationSliderComponent;
