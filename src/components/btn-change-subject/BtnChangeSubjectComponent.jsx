import PropTypes from "prop-types";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function BtnChangeSubjectComponent({handleSubject, tooltipText}) {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {tooltipText}
    </Tooltip>
  );
  return (
  <OverlayTrigger placement="bottom" delay={{ hide: 200 }} overlay={renderTooltip}>
    <button
    onClick={() => handleSubject(null)}
    className="btn-change-subject"
  >
    <i className="fa-solid fa-arrow-right-to-bracket"></i>
  </button>
  </OverlayTrigger>

  )
}
BtnChangeSubjectComponent.propTypes = {
  handleSubject: PropTypes.func.isRequired,
  tooltipText: PropTypes.string.isRequired,
};

export default BtnChangeSubjectComponent