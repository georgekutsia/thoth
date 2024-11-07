import { useState } from "react"

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function BtnPruebaComponent({texto, textColor}) {
  const [width, setwidth] = useState("350px");

  const handleWidth = () => {
  if(width === "350px"){
    setwidth("199px")
  } else if(width === "199px"){
    setwidth("350px")
  }
}

  return (
    <button style={{color: textColor, backgroundColor: "red", padding: "10px", width: width}} onClick={()=>handleWidth()}>{texto}</button>
  )
}