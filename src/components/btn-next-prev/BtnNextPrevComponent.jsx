import PropTypes from 'prop-types';

import "./btnNextPrev.css"
function BtnNextPrevComponent({handlePrev, handleNext}) {
  return (
    <div >

    <button className="btnNavNextPrevLeft" onClick={handlePrev}>   <span className='span-btnNextPrev'><i className={`fa-solid fa-chevron-left ch-left-slide`} ></i></span><i className="i-slider"></i></button>
    <button className="btnNavNextPrevRight" onClick={handleNext}>   <span className='span-btnNextPrev'><i className={`fa-solid fa-chevron-right ch-right-slide`} ></i></span><i className="i-slider"></i></button>
  </div>
  )
}
BtnNextPrevComponent.propTypes = {
  handlePrev: PropTypes.func, // fromData ahora debe ser un array
  handleNext: PropTypes.func, // text debe ser una cadena de texto
};

export default BtnNextPrevComponent