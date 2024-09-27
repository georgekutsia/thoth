import "../explanation.css"
// eslint-disable-next-line react/prop-types
function ExtraExplanationComponent({icon, color}) {
  return (
    <i className={icon} style={{color:color}}></i>
  )
}

export default ExtraExplanationComponent