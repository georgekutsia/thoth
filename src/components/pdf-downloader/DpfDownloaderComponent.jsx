import "./PdfDownloader.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import PropTypes from "prop-types";

function DpfDownloaderComponent({text}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Descargar {text}
    </Tooltip>
  );

  return (
    <>
      <div className="buttons-container pdf-downloader">
        <OverlayTrigger
          placement="top"  /* Cambiado a "top" para asegurarse de que el tooltip aparece encima */
          delay={{ hide: 200 }}
          overlay={renderTooltip}
        >
          <a href="https://thepowerfp.alexiaclassroom.com/pluginfile.php/32140/mod_resource/content/1/UD1.2-%20UBUNTU.pdf" download="document.pdf" id="ms-download-link">
            <button className="button-arounder">
              <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </OverlayTrigger>
      </div>
    </>
  );
}
DpfDownloaderComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DpfDownloaderComponent;
