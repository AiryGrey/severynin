import "../App.css"

const imageSource = "/image/header.jpg";

function Header() {
  return (
          <div className="header">
              <img src={imageSource} alt="Logotip" width="100%" />
          </div>
  );
}

export default Header;
