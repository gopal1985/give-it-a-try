import './Header.css';
import logo from '../../../images/logo192.png'

function Header() {
  return (
    <div className="header">
        <div className="container">
          <div className="first-column">
          <a href="/"><img src={logo} width="130" height="65" alt=""/></a>
          </div>
          <div className="second-column">
            <input name="site-search" type="text" placeholder="Search shop or product......." />
          </div>
          <div className="third-column">
            <a href="test.com">My Account</a>
          </div>
          <div className="fourth-column">
            <a href="test.com">Cart(0)</a>
          </div>
        </div>
    </div>
  );
}

export default Header;
