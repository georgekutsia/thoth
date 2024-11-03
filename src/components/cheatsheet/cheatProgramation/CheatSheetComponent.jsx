import "./cheatSheet.css";
import programationCheatsheetsData from "../../../data/cheatsheets/programationCheatsheetData";
import { useState } from "react";
import BtnExpandComponent from "../../button-expand/BtnExpandComponent";
import FormattedTextComponent from "../../utils/formattedText/FormattedTextComponent";
import FilterComponent from "../../filter/FilterComponent";

function CheatSheetComponent() {
  const [cheatData] = useState(programationCheatsheetsData);
  const [cardWidth, setcardWidth] = useState("20vw");
  const [cardHeight, setcardHeight] = useState("350px");
  const [titleSize, settitleSize] = useState("20px");
  const [textSize, settextSize] = useState("14px");
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div className="cheat-sheet-box">
    <div className="expand-icon-cheatsheet">
        <BtnExpandComponent handleExpand={handleExpand} icon="fa-1" />
        <FilterComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} filtrar={`Filtrarheatsheet`}/>
      </div>
    <div className="cheat-sheet-content">
      {filteredData.map((data, index) => (
        <div  key={index} className="cheat-sheet-card" style={{ width: cardWidth, minHeight: cardHeight }}>
          <h3  style={{ fontSize: titleSize }}>{data.title}</h3>
          <div  className="cheat-sheet-card-imgs">
            <img src={data.url} alt="index" />
            {data.url1 && <img src={data.url1} alt="index" />}
            {data.url2 && <img src={data.url2} alt="index" />}
            {data.url3 && <img src={data.url3} alt="index" />}
          </div>
          <div  className="cheat-sheet-card-texts" style={{ fontSize: textSize }}>
            <p><FormattedTextComponent text={data.text}/></p>
            <p><FormattedTextComponent text={data.text1}/></p>
            <ul>
              <li><FormattedTextComponent text={data.textSub1a}/></li>
              <li><FormattedTextComponent text={data.textSub1b}/></li>
              <li><FormattedTextComponent text={data.textSub1c}/></li>
              <li><FormattedTextComponent text={data.textSub1d}/></li>
            </ul>
            <p style={{ fontSize: textSize }}><FormattedTextComponent text={data.text2}/></p>
            <ul>
              <li><FormattedTextComponent text={data.textSub2a}/></li>
              <li><FormattedTextComponent text={data.textSub2b}/></li>
              <li><FormattedTextComponent text={data.textSub2c}/></li>
              <li><FormattedTextComponent text={data.textSub2d}/></li>
            </ul>
            <p style={{ fontSize: textSize }}><FormattedTextComponent text={data.text3}/></p>
            <ul>
              <li><FormattedTextComponent text={data.textSub3a}/></li>
              <li><FormattedTextComponent text={data.textSub3b}/></li>
              <li><FormattedTextComponent text={data.textSub3c}/></li>
              <li><FormattedTextComponent text={data.textSub3d}/></li>
            </ul>
            <p style={{ fontSize: textSize }}><FormattedTextComponent text={data.text4}/></p>
            <ul>
              <li><FormattedTextComponent text={data.textSub4a}/></li>
              <li><FormattedTextComponent text={data.textSub4b}/></li>
              <li><FormattedTextComponent text={data.textSub4c}/></li>
              <li><FormattedTextComponent text={data.textSub4d}/></li>
            </ul>
            <p style={{ fontSize: textSize }}><FormattedTextComponent text={data.text5}/></p>
            <ul>
              <li><FormattedTextComponent text={data.textSub5a}/></li>
              <li><FormattedTextComponent text={data.textSub5b}/></li>
              <li><FormattedTextComponent text={data.textSub5c}/></li>
              <li><FormattedTextComponent text={data.textSub5d}/></li>
            </ul>
            <p style={{ fontSize: textSize }}><FormattedTextComponent text={data.text6}/></p>
            <ul>
              <li><FormattedTextComponent text={data.textSub6a}/></li>
              <li><FormattedTextComponent text={data.textSub6b}/></li>
              <li><FormattedTextComponent text={data.textSub6c}/></li>
              <li><FormattedTextComponent text={data.textSub6d}/></li>
            </ul>
          </div>
          <a href={data.link} target="_blank" rel="noopener noreferrer">{data.linkText}</a>
        </div>
      ))}
    </div>
    </div>

  );
}

export default CheatSheetComponent;
