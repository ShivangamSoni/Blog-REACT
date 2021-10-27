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
            <Link to="/">Technology</Link>
          </li>
          <li>
            <Link to="/">Bollywood</Link>
          </li>
          <li>
            <Link to="/">Hollywood</Link>
          </li>
          <li>
            <Link to="/">Fitness</Link>
          </li>
          <li>
            <Link to="/">Food</Link>
          </li>
          <li>
            <Link to="/">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
