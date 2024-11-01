import "./cheatSheet.css"
import programationCheatsheetsData from "../../../data/cheatsheets/programationCheatsheetData"
import { useState } from "react"
import BtnExpandComponent from "../../button-expand/BtnExpandComponent"
function CheatSheetComponent() {
const [first] = useState(programationCheatsheetsData)
const [cardWidth, setcardWidth] = useState("20vw")
const [cardHeight, setcardHeight] = useState("350px")
const [titleSize, settitleSize] = useState("22px")
const [textSize, settextSize] = useState("14px")

const handleExpand = () =>{
  if(cardWidth === "20vw"){
    setcardWidth("32vw")
  } else if(cardWidth === "32vw"){
    setcardWidth("45vw")
    settitleSize("24px")
    settextSize("16px")
  } else if(cardWidth === "45vw"){
    setcardWidth("68vw")
    setcardHeight("450px")
    settitleSize("28px")
    settextSize("20px")
  } else{
    setcardWidth("20vw")
    setcardHeight("350px")
    settitleSize("22px")
    settextSize("14px")
  }
}


  return (
    <div className="cheat-sheet-box"> 
      <div className="expand-icon-cheatsheet">
        <BtnExpandComponent handleExpand={handleExpand} icon="fa-2" extraIcon={" x"}/>
      </div>
      {first.map((data, index)=>
      <div key={index} className="cheat-sheet-card" style={{width: cardWidth, minHeight:cardHeight}}>
        <h3 style={{fontSize : titleSize}}>{data.title}</h3>
        <div className="cheat-sheet-card-imgs">
            <img  src={data.url} alt="index" />
            {data.url1 &&
            <img  src={data.url1} alt="index" />
            }
            {data.url2 &&
            <img  src={data.url2} alt="index" />
            }
            {data.url3 &&
            <img  src={data.url3} alt="index" />
            }
        </div>
      <div className="cheat-sheet-card-texts">
        <p  style={{fontSize : textSize}}>{data.text}</p>
        <p  style={{fontSize : textSize}}>{data.text1}</p>
        <ul>
          <li>{data.textSub1a}</li>
          <li>{data.textSub1b}</li>
          <li>{data.textSub1c}</li>
          </ul>
        <p  style={{fontSize : textSize}}>{data.text2}</p>
        <ul>
          <li>{data.textSub2a}</li>
          <li>{data.textSub2b}</li>
          <li>{data.textSub2c}</li>
          </ul>
        <p  style={{fontSize : textSize}}>{data.text3}</p>
        <ul>
          <li>{data.textSub3a}</li>
          <li>{data.textSub3b}</li>
          <li>{data.textSub3c}</li>
          </ul>
        <p  style={{fontSize : textSize}}>{data.text4}</p>
        <ul>
          <li>{data.textSub4a}</li>
          <li>{data.textSub4b}</li>
          <li>{data.textSub4c}</li>
          </ul>
        <p  style={{fontSize : textSize}}>{data.text5}</p>
        <p  style={{fontSize : textSize}}>{data.text6}</p>
      </div>

      </div>
      )}
    </div>
  )
}

export default CheatSheetComponent