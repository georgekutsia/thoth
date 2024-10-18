import "./btnSliderNav.css"

// eslint-disable-next-line react/prop-types
function BtnSliderNavComponent({ data, slideTo, icon }) {
  if(icon === 0){
    icon = "fa-location-dot"
  }
  return (
    <>
    <button onClick={slideTo} className="btnNavSlider">
      <span><i className={`fa-solid ${icon}`} ></i>{data}</span><i className="i-slider"></i>
    </button>
    </>
  );
}

export default BtnSliderNavComponent;
