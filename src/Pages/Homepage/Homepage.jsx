import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Homepage.css";

export default function Homepage() {
  useEffect(() => {
    document.title = "Homepage";
  }, []);

  return (
    <>
      <header id="header" className="header">
        <div className="container ">
          <div className="row">
            <div className="col-md-5">
              <div className="text-container">
                <h1 className="h1-large">
                  Selamat Datang <br /> di Desa Cipeundeuy <br />
                  Kab. Sukabumi
                </h1>
                <p className="p-large">
                  Desa Cipeundeuy merupakan salah satu desa yang ada di
                  kecamatan surade yang memiliki penduduk berjumlah 4613 orang
                </p>
                <Link to={"/About"} className="button button-primary-color">
                  Info Selengkapnya
                  <i className="bi bi-arrow-right ms-3"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-7">
              <div className="image-container">
                <img
                  className="img-fluid mt-5 rounded"
                  src={require("../../Images/statistik-pengunjung.jpg")}
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="parawisata" className="parawisata">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="title-primary">Explore Pariwisata Terbaik</h1>
          </div>
          <div className="row mb-5">
            <div className="col-md-4">
              <img
                src={require("../../Images/parawisata-1.jpg")}
                className="card-img-top img-component"
                alt="Pantai Minanjaya"
                data-bs-toggle="modal"
                data-bs-target="#penduduk"
              />
              <div className="card-body">
                <h5 className="card-title card-title-primary">
                  Pantai Minanjaya
                </h5>
              </div>
              <div
                className="modal fade "
                id="penduduk"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog  modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-7">
                          <picture>
                            <img
                              src={require("../../Images/parawisata-1.jpg")}
                              className="first-img-modal"
                              alt="statistik-penduduk"
                            />
                          </picture>
                        </div>
                        <div className="col-md-5">
                          <picture>
                            <img
                              src={require("../../Images/parawisata-1.jpg")}
                              className="second-img-modal"
                              alt="statistik-penduduk"
                            />
                          </picture>
                          <picture>
                            <img
                              src={require("../../Images/parawisata-1.jpg")}
                              className="second-img-modal"
                              alt="statistik-penduduk"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="info-detail mt-3 text-color-primary">
                        <h5>Pantai Minanjaya</h5>
                        <p>Rp. 25.000,00</p>
                        <div className="icon-modal">
                          <i className="bi bi-clock">
                            <span>09.00 - 17.00 WIB</span>
                          </i>
                          <i className="bi bi-compass">
                            <span>
                              Pantai Cimandala, Cipeundeuy, Surade, Kabupaten
                            </span>
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <img
                src={require("../../Images/parawisata-2.jpg")}
                className="card-img-top img-component"
                alt="Pantai Minanjaya"
              />
              <div className="card-body">
                <h5 className="card-title card-title-primary">
                  Pantai Minanjaya
                </h5>
              </div>
            </div>

            <div className="col-md-4">
              <img
                src={require("../../Images/parawisata-3.jpg")}
                className="card-img-top img-component"
                alt="Nama Produk"
              />
              <div className="card-body">
                <h5 className="card-title card-title-primary">
                  Pantai Minanjaya
                </h5>
              </div>
            </div>
          </div>
          <div className="paginate">
            <nav aria-label="...">
              <ul className="pagination d-flex justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#a">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#a">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#a">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#a">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#a">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section id="produk" className="produk">
        <div className="container">
          <div className="title-secondary text-center mb-5">
            <h1>Ciri Khas Daerah (UMKM)</h1>
          </div>
          <div className="row mb-5">
            <div className="col-md-4">
              <img
                src={require("../../Images/parawisata-1.jpg")}
                className="card-img-top img-component"
                alt="Pantai Minanjaya"
              />
              <div className="card-body">
                <h5 className="card-title card-title-secondary">Nama Produk</h5>
              </div>
            </div>

            <div className="col-md-4">
              <img
                src={require("../../Images/parawisata-2.jpg")}
                className="card-img-top img-component"
                alt="Pantai Minanjaya"
              />
              <div className="card-body">
                <h5 className="card-title card-title-secondary">Nama Produk</h5>
              </div>
            </div>

            <div className="col-md-4">
              <img
                src={require("../../Images/parawisata-3.jpg")}
                className="card-img-top img-component"
                alt="Nama Produk"
              />
              <div className="card-body">
                <h5 className="card-title card-title-secondary">Nama Produk</h5>
              </div>
            </div>
          </div>
          <div className="paginate">
            <nav aria-label="...">
              <ul className="pagination d-flex justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#a">
                    {" "}
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#a">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#a">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#a">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#a">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section id="berita" className="berita">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="title-primary">Berita Terbaru</h1>
          </div>
          <div className="row">
            <div className="col-md-8">
              <Link to={"/About"} className="button button-outline-color mx-2">
                All
              </Link>
              <Link to={"/About"} className="button button-primary-color mx-2">
                Parawisata
              </Link>
              <Link to={"/About"} className="button button-outline-color">
                UMKM
              </Link>
            </div>
            <div className="col-md-4">
              <form className="form d-flex justify-content-end">
                <i className="bi bi-search"></i>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Cari parawisata atau UMKM"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div className="content mb-5">
            <div className="row">
              <div className="col-md-6">
                <div className="wrapper-berita mt-5">
                  <div className="content-berita pt-5 mx-5">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={require("../../Images/artikel-1.jpg")}
                          className="img-thumbnail"
                          alt="artikel-1"
                        />
                      </div>
                      <div className="col-md-6">
                        <h5 className="text-color-primary">
                          Pantai Cimandala yang indah kini lebih indah...
                        </h5>
                        <p className="text-muted">
                          Long established fact that a reader will be distracted
                          by the readable...
                        </p>
                        <i className="bi bi-calendar-check text-color-primary">
                          <span className="mx-2">26 Februari 2022</span>
                        </i>
                      </div>
                      <hr className="mt-3" />
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={require("../../Images/artikel-1.jpg")}
                          className="img-thumbnail"
                          alt="artikel-1"
                        />
                      </div>
                      <div className="col-md-6">
                        <h5 className="text-color-primary">
                          Pantai Cimandala yang indah kini lebih indah...
                        </h5>
                        <p className="text-muted">
                          Long established fact that a reader will be distracted
                          by the readable...
                        </p>
                        <i className="bi bi-calendar-check text-color-primary">
                          <span className="mx-2">26 Februari 2022</span>
                        </i>
                      </div>
                      <hr className="mt-3" />
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={require("../../Images/artikel-1.jpg")}
                          className="img-thumbnail"
                          alt="artikel-1"
                        />
                      </div>
                      <div className="col-md-6">
                        <h5 className="text-color-primary">
                          Pantai Cimandala yang indah kini lebih indah...
                        </h5>
                        <p className="text-muted">
                          Long established fact that a reader will be distracted
                          by the readable...
                        </p>
                        <i className="bi bi-calendar-check text-color-primary">
                          <span className="mx-2">26 Februari 2022</span>
                        </i>
                      </div>
                      <hr className="mt-3" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="wrapper-berita mt-5">
                  <div className="content-berita pt-5 mx-5">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={require("../../Images/artikel-1.jpg")}
                          className="img-thumbnail"
                          alt="artikel-1"
                        />
                      </div>
                      <div className="col-md-6">
                        <h5 className="text-color-primary">
                          Pantai Cimandala yang indah kini lebih indah...
                        </h5>
                        <p className="text-muted">
                          Long established fact that a reader will be distracted
                          by the readable...
                        </p>
                        <i className="bi bi-calendar-check text-color-primary">
                          <span className="mx-2">26 Februari 2022</span>
                        </i>
                      </div>
                      <hr className="mt-3" />
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={require("../../Images/artikel-1.jpg")}
                          className="img-thumbnail"
                          alt="artikel-1"
                        />
                      </div>
                      <div className="col-md-6">
                        <h5 className="text-color-primary">
                          Pantai Cimandala yang indah kini lebih indah...
                        </h5>
                        <p className="text-muted">
                          Long established fact that a reader will be distracted
                          by the readable...
                        </p>
                        <i className="bi bi-calendar-check text-color-primary">
                          <span className="mx-2">26 Februari 2022</span>
                        </i>
                      </div>
                      <hr className="mt-3" />
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={require("../../Images/artikel-1.jpg")}
                          className="img-thumbnail"
                          alt="artikel-1"
                        />
                      </div>
                      <div className="col-md-6">
                        <h5 className="text-color-primary">
                          Pantai Cimandala yang indah kini lebih indah...
                        </h5>
                        <p className="text-muted">
                          Long established fact that a reader will be distracted
                          by the readable...
                        </p>
                        <i className="bi bi-calendar-check text-color-primary">
                          <span className="mx-2">26 Februari 2022</span>
                        </i>
                      </div>
                      <hr className="mt-3 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="paginate">
            <nav aria-label="...">
              <ul className="pagination d-flex justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#a">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#a">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#a">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#a">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#a">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
