import React, { useState, useCallback } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from "prop-types";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./btnCopy.css"

function BtnCopyComponent({copiarTexto, btnT}) {
  const [value, setValue] = useState(copiarTexto);
  const [copied, setCopied] = useState(false);
  const [copyColor, setcopyColor] = useState("var(--white");
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {btnT}
    </Tooltip>
  );
  const onCopy = useCallback(() => {
    setCopied(true);
    setcopyColor("var(--green")
    setTimeout(() => {
    setCopied(false);
    setcopyColor("var(--white")

    }, 1000);
  }, []);

  return (
    <div className="copy-component">
      <section className="section">
        <OverlayTrigger placement="right" delay={{ hide: 200 }} overlay={renderTooltip}>
          <CopyToClipboard text={value} onCopy={onCopy}>
            <i style={{color: copyColor}} className="fa-regular fa-copy"></i>
          </CopyToClipboard>
        </OverlayTrigger>
      </section>
      {copied && <p className='btn-copy-success' > <i className="fa-regular fa-thumbs-up"></i></p>}
    </div>
  );
}
BtnCopyComponent.propTypes = {
  copiarTexto: PropTypes.string.isRequired,
  btnT: PropTypes.string.isRequired,
};

export default BtnCopyComponent;
