import "./pdfDownloader.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import PropTypes from "prop-types";

function DpfDownloaderComponent({text, textPlus, url, nav}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} >
      {text} <br /> {textPlus}
    </Tooltip>
  );

  return (
    < >
      <div className="buttons-container">
        <OverlayTrigger placement="top" delay={{ hide: 200 }} overlay={renderTooltip}>
          <a target="_blank" rel="noopener noreferrer" href={url} download="document.pdf" id="ms-download-link">
            {nav ? 
              (
            <button className="button-arounders">
                <img src="https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729169456/classAlexia_xyyusd.png" className="bulala"/>
            </button>
                ):
            <button className="button-arounder">
              <i className= "fa-solid fa-download" style={{color: "white"}}></i>
            </button>
            }
          </a>
        </OverlayTrigger>
      </div>
    </>
  );
}
DpfDownloaderComponent.propTypes = {
  text: PropTypes.string.isRequired,
  textPlus: PropTypes.string.isRequired,
  url: PropTypes.string,
  nav: PropTypes.bool,
};

export default DpfDownloaderComponent;
