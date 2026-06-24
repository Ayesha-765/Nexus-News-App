import { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("general");

  const handleClick = (cat) => {
    setCategory(cat);
    setActiveCategory(cat);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-3 pe-5" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">Nexus News</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-4">
              <a
                href="#"
                className={`nav-link ${activeCategory === "general" ? "active" : ""}`}
                onClick={() => handleClick("general")}
              >
                General
              </a>
              <a
                href="#"
                className={`nav-link ${activeCategory === "technology" ? "active" : ""}`}
                onClick={() => handleClick("technology")}
              >
                Technology
              </a>
            </li>
            <li className="nav-item px-4">
              <a
                href="#"
                className={`nav-link ${activeCategory === "business" ? "active" : ""}`}
                onClick={() => handleClick("business")}
              >
                Business
              </a>
            </li>
            <li className="nav-item px-4">
              <a
                href="#"
                className={`nav-link ${activeCategory === "health" ? "active" : ""}`}
                onClick={() => handleClick("health")}
              >
                Health
              </a>
            </li>
            <li className="nav-item px-4">
              <a
                href="#"
                className={`nav-link ${activeCategory === "sports" ? "active" : ""}`}
                onClick={() => handleClick("sports")}
              >
                Sports
              </a>
            </li>
            <li className="nav-item px-4">
              <a
                href="#"
                className={`nav-link ${activeCategory === "entertainment" ? "active" : ""}`}
                onClick={() => handleClick("entertainment")}
              >
                Entertainment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
