
import { ExtraExplanationComponent } from "../../components"
import "./explanation.css"
// eslint-disable-next-line react/prop-types
function ExplanationComponent({color}) {
  return (
    <div className="explanation-box">
    <section id="expl-section1">
      <h3 className="explanation-title">hey</h3>
      <p style={{backgroundColor: color}} className="explanation-text">Explanation Explanation Explanation  Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation Explanation </p>
    </section>
    <section id="expl-section2">
        <ExtraExplanationComponent icon={"fa-solid fa-kitchen-set extra-icons"}  />
        <ExtraExplanationComponent icon={"fa-solid fa-video extra-icons"} />
        <ExtraExplanationComponent icon={"fa-solid fa-baseball extra-icons"} />
        <ExtraExplanationComponent icon={"fa-solid fa-shuffle extra-icons"} />
      </section>
    </div>
  )
}

export default ExplanationComponent