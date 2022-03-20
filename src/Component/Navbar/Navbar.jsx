import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const handleToggle = () => {
    const navbarCollapse = document.querySelector(".collapse");
    navbarCollapse.classList.remove("show");

    const navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.classList.add("collapsed");
    navbarToggler.setAttribute("aria-expanded", "false");
  };

  // onscroll replace bg-transparent with bg-primary
  window.onscroll = function () {
    const navbar = document.querySelector(".navbar");
    if (window.pageYOffset > 50) {
      navbar.classList.replace("bg-transparent", "bg-color-primary");
    } else {
      navbar.classList.replace("bg-color-primary", "bg-transparent");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          Cipeundeuy
        </Link>
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
            <li className="nav-item" onClick={handleToggle}>
              <NavLink className="nav-link" to="/">
                Beranda
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleToggle}>
              <NavLink className="nav-link" to="/Parawisata">
                Parawisata
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleToggle}>
              <NavLink className="nav-link" to="/UMKM">
                UMKM
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleToggle}>
              <NavLink className="nav-link" to="/Berita">
                Berita
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
