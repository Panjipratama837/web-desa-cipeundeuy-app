import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const handleToggle = () => {
    const navbarCollapse = document.querySelector(".collapse");
    navbarCollapse.classList.remove("show");

    const navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.classList.add("collapsed");
    navbarToggler.setAttribute("aria-expanded", "false");
  };

  // onscroll replace bg-nav-transparent with bg-primary
  window.onscroll = function () {
    const navbar = document.querySelector(".navbar");
    if (window.pageYOffset > 50) {
      navbar.classList.replace("bg-nav-transparent", "bg-color-primary");
    } else {
      navbar.classList.replace("bg-color-primary", "bg-nav-transparent");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-nav-transparent fixed-top">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          <img
            src={require("../../Images/logo-desa.png")}
            alt="logo-desa"
            className="nav-logo"
          />
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
            <li className="nav-item">
              <HashLink
                className="nav-link"
                to={"/#header"}
                onClick={handleToggle}
              >
                Info Desa
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link"
                to={"/#parawisata"}
                onClick={handleToggle}
              >
                Parawisata
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link"
                to={"/#produk"}
                onClick={handleToggle}
              >
                UMKM
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link"
                to={"/#berita"}
                onClick={handleToggle}
              >
                Berita
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
