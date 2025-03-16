import { JSX } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../css/Header.css'

const Header = (): JSX.Element => {
  return (
    <div className="headerWrap">
      <nav className="header">
        <li className="logo"><Link to="/">BLOG</Link></li> 
        
        <ul className="gnb">
          <li>
            <Link to="/">TIL</Link>
          </li>
          <li>
            <Link to="/dummy1">dummy1</Link>
          </li>
          <li>
            <Link to="/dummy2">dummy2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;