import "../explanation.css";


// eslint-disable-next-line react/prop-types
function ExtraExplanationComponent({ handle, icon, aos }) {
  return (
    <i
    data-aos="zoom-in" data-aos-delay={aos}
      className={icon}
      onClick={handle ? handle : () => {}} // Verificamos si 'handle' está definido antes de usarlo
    ></i>
  );
}

export default ExtraExplanationComponent;
