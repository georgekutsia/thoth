import "../explanation.css";

// eslint-disable-next-line react/prop-types
function ExtraExplanationComponent({ handle, icon }) {
  return (
    <i
      className={icon}
      onClick={handle ? handle : () => {}} // Verificamos si 'handle' está definido antes de usarlo
    ></i>
  );
}

export default ExtraExplanationComponent;
