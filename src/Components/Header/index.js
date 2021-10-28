import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <span>The</span> Siren
      </h1>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/technology">Technology</Link>
          </li>
          <li>
            <Link to="/category/bollywood">Bollywood</Link>
          </li>
          <li>
            <Link to="/category/hollywood">Hollywood</Link>
          </li>
          <li>
            <Link to="/category/fitness">Fitness</Link>
          </li>
          <li>
            <Link to="/category/fitness">Food</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
