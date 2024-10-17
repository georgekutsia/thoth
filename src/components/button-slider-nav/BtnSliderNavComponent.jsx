import "./btnSliderNav.css"

// eslint-disable-next-line react/prop-types
function BtnSliderNavComponent({ data, slideTo }) {
  return (
    <button onClick={slideTo} className="btnNavSlider">
      <span>{data}</span><i></i>
    </button>
  );
}

export default BtnSliderNavComponent;
