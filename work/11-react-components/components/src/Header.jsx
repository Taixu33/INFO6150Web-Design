import './Header.css';
import GlobalNav from './GlobalNav';
import logo from './images/logo.jpg';

function Header({setPage}) {
  return (
  <header className="header">
    <img
      src={logo}
      alt="logo"
      className="header__logo"
      />
      <h1 className="header__title">
        Welcome to Cats World
      </h1>
      <GlobalNav className="header__nav" setPage={setPage}/>
    </header>
  );
}

export default Header ;
