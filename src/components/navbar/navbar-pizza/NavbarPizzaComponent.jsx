import "./navbarPizza.css"
function NavbarPizzaComponent() {
  return (
    <>
      <div className="gallery">
        <img
          src="https://assets.codepen.io/8889025/Collabrorative.PNG"
          alt="a hot air balloon"
        />
        <img
          src="https://assets.codepen.io/8889025/Adventurous.PNG"
          alt="adventurous"
        />
        <img
          src="https://assets.codepen.io/8889025/Reliable.PNG"
          alt="a small boat"
        />
        <img
          src="https://assets.codepen.io/8889025/Energetic.PNG"
          alt="a forest"
        />
      </div>
      <br />
      <a
        href="https://nhsbsauk.sharepoint.com.mcas.ms/sites/MyHub/SitePages/Our-Purpose-Vision-and-Values.aspx"
        target="_blank"
        className="btn btn-primary btn-block"
        role="button"
        rel="noopener noreferrer"
      >
        Our Purpose, Vision and Values
      </a>
    </>
  );
}

export default NavbarPizzaComponent;
