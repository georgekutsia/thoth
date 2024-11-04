import PropTypes from "prop-types";
import BtnSliderNavComponent from "../button-slider-nav/BtnSliderNavComponent";
import "./slider.css";

function NavigationSliderComponent({ changeNextData, fromData, navData }) {
  return (
    <div className="navigation-buttons">
      {navData[fromData].map((data, index) => {
        return (
          <BtnSliderNavComponent
            key={index}
            changeNextData={() => changeNextData(index)}
            data={data}
          />
        );
      })}
    </div>
  );
}

NavigationSliderComponent.propTypes = {
  changeNextData: PropTypes.func.isRequired,
  navData: PropTypes.object.isRequired, // Corregido para que `navData` sea un objeto
  fromData: PropTypes.string.isRequired, 
};

export default NavigationSliderComponent;
