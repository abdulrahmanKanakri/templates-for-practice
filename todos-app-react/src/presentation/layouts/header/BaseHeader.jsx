import { Link } from "react-router-dom";

import "./base-header.css";

export default function BaseHeader() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <h3 className="nav-brand">todo app</h3>
          <ul className="nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">about</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
