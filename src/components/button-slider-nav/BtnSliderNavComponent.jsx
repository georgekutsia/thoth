import "./btnSliderNav.css";

// eslint-disable-next-line react/prop-types
function BtnSliderNavComponent({ data, changeNextData, icon, isActive }) {
  const buttonClass = isActive ? "" : "i-slider";

  return (
    <button onClick={changeNextData} className="btnNavSlider">
      <span><i className={`${icon}`} ></i>{data}</span><i className={buttonClass}></i>
    </button>
  );
}

export default BtnSliderNavComponent;
