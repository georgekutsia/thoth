import "./cheatSheet.css";
import { useState } from "react";
import BtnExpandComponent from "../../button-expand/BtnExpandComponent";
import FormattedTextComponent from "../../utils/formattedText/FormattedTextComponent";
import FilterComponent from "../../filter/FilterComponent";
import PropTypes from "prop-types";
import BtnSliderNavComponent from "../../button-slider-nav/BtnSliderNavComponent";

function CheatSheetComponent({ cheatsheetData }) {
  const [cheatData, setCheatData] = useState(cheatsheetData.básico);
  const [cardWidth, setcardWidth] = useState("20vw");
  const [cardHeight, setcardHeight] = useState("350px");
  const [titleSize, settitleSize] = useState("20px");
  const [textSize, settextSize] = useState("14px");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const filteredData = cheatData.filter((data) =>
    data.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExpand = () => {
    if (cardWidth === "20vw") {
      setcardWidth("32vw");
    } else if (cardWidth === "32vw") {
      setcardWidth("45vw");
      settitleSize("22px");
      settextSize("16px");
    } else if (cardWidth === "45vw") {
      setcardWidth("68vw");
      setcardHeight("450px");
      settitleSize("25px");
      settextSize("20px");
    } else {
      setcardWidth("20vw");
      setcardHeight("350px");
      settitleSize("20px");
      settextSize("14px");
    }
  };

  const handleChangeData = (key, index) => {
    setCheatData(cheatsheetData[key] || []);
    setActiveButton(index); // Establece el botón activo
  };

  return (
    <div className="cheat-sheet-box">
      <div className="expand-icon-cheatsheet">
      <div>
        {cheatsheetData.button.map((navData, index) => (
          <BtnSliderNavComponent
            key={index}
            data={navData.title}
            isActive={activeButton === index}
            changeNextData={() => handleChangeData(navData.title, index)}
          />
        ))}
      </div>
        <FilterComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} filtrar="Filtrar cheatsheet" />
        <BtnExpandComponent handleExpand={handleExpand} icon="fa-1" extraIcon/>
      </div>
      <div className="cheat-sheet-content">
        {filteredData.map((data, index) => (
          <div key={index} className="cheat-sheet-card" style={{ width: cardWidth, minHeight: cardHeight }}>
            <h3 style={{ fontSize: titleSize }}>{data.title}</h3>
            <div className="cheat-sheet-card-imgs">
              <img src={data.url} alt="index" />
              {data.url1 && <img src={data.url1} alt="index" />}
              {data.url2 && <img src={data.url2} alt="index" />}
              {data.url3 && <img src={data.url3} alt="index" />}
            </div>
            <div className="cheat-sheet-card-texts" style={{ fontSize: textSize }}>
              <p><FormattedTextComponent text={data.text} /></p>
              <p><FormattedTextComponent text={data.text1} /></p>
              {/* Aquí se muestran otros contenidos, aplicando FormattedTextComponent donde corresponda */}
              <p style={{ fontSize: textSize }}><FormattedTextComponent text={data.text6} /></p>
            </div>
            <a href={data.link} target="_blank" rel="noopener noreferrer">{data.linkText}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

CheatSheetComponent.propTypes = {
  cheatsheetData: PropTypes.object.isRequired,
};

export default CheatSheetComponent;
