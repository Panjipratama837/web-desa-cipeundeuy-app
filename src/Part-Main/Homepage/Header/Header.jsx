import React from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-reveal";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="container ">
        <div className="row">
          <div className="col-md-5">
            <div className="text-container">
              <Fade left delay={500}>
                <h1 className="h1-large">
                  Selamat Datang <br /> di Desa Cipeundeuy <br />
                  Kab. Sukabumi
                </h1>
              </Fade>
              <Fade left delay={1000}>
                <p className="p-large">
                  Desa Cipeundeuy merupakan salah satu desa yang ada di
                  kecamatan surade yang memiliki penduduk berjumlah 4613 orang
                </p>
              </Fade>
              <Fade left delay={1500}>
                <Link to={"/About"} className="button button-primary-color">
                  Info Selengkapnya
                  <i className="bi bi-arrow-right ms-3"></i>
                </Link>
              </Fade>
            </div>
          </div>
          <div className="col-md-7">
            <div className="image-container">
              <Zoom delay={1000}>
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-pause="false"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      data-bs-interval="3000"
                    >
                      <picture>
                        <img
                          src={require("../../../Images/carousel-1.jpg")}
                          className="d-block w-100 rounded"
                          alt="..."
                        />
                      </picture>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <picture>
                        <img
                          src={require("../../../Images/carousel-2.jpg")}
                          className="d-block w-100 rounded"
                          alt="..."
                        />
                      </picture>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <picture>
                        <img
                          src={require("../../../Images/carousel-3.jpg")}
                          className="d-block w-100 rounded"
                          alt="..."
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
