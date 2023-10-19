import "../App.css"
import Logo from '../img/header.jpg';

function Header() {
  return (
          <div className="header">
              <img src={Logo} alt="Logotip" width="100%" />
          </div>
  );
}

export default Header;
