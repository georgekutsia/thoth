import "../explanation.css";

// eslint-disable-next-line react/prop-types
function ExtraExplanationComponent({ handle, icon, color }) {
  return (
    <i
      className={icon}
      style={{ color: color }}
      onClick={handle ? handle : () => {}} // Verificamos si 'handle' está definido antes de usarlo
    ></i>
  );
}

export default ExtraExplanationComponent;
