import logo from '../shs_logo.png';
import '../App.css';
import '../styles/Header.css';

function Header() {
  return (
    <header className="App-header">
        <img src={logo} id="header-logo" className="App-logo" alt="shs logo"/>
        <ul>
          <li><a>My Inventory</a></li>
          <li><a>Create Packages</a></li>
          <li><a>Package History</a></li>
        </ul>
      </header>
  );
}

export default Header;
