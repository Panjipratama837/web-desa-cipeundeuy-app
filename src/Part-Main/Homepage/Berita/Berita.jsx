import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Fade, Zoom } from "react-reveal";

const Berita = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("All");

  useEffect(() => {
    axios
      .get("https://desa-cipeundeuy-backend.vercel.app/berita/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  const filterData = data.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.slug.toLowerCase().includes(search.toLowerCase())
    );
  });

  // filter by select
  const filterByCategories = filterData.filter((item) => {
    return item.slug === select;
  });

  console.log(data);

  const displayPerPage = 6;
  const pagesVisited = pageNumber * displayPerPage;

  const displayBerita = filterData
    .slice(pagesVisited, pagesVisited + displayPerPage)
    .map((item, index) => {
      return (
        <div key={index} className="col-md-6">
          <Fade bottom delay={index * 200}>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={item.image_id}
                  className="img-thumbnail img-berita"
                  alt="artikel-1"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal${index}`}
                />
              </div>
              <div className="col-md-6">
                <h5
                  className="text-color-primary title-berita"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal${index}`}
                >
                  {item.title}
                </h5>
                <h6 className="text-muted">{`Category : ${item.slug}`}</h6>
                <p className="text-muted">{item.description}</p>
                <i className="bi bi-calendar-check text-color-primary">
                  <span className="mx-2">{item.created_date}</span>
                </i>
              </div>
            </div>
            <hr className="mt-3" />
          </Fade>

          <div
            className="modal fade"
            id={`modal${index}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
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
                  <picture>
                    <img
                      src={item.image_id}
                      className="first-img-modal"
                      alt="statistik-penduduk"
                    />
                  </picture>
                  <div className="info-detail mt-3 text-color-primary">
                    <button className="btn btn-outline-success mb-3">
                      {item.slug}
                    </button>
                    <h5>{item.title}</h5>
                    <p className="text-muted">{item.description}</p>
                    <div className="icon-modal-berita">
                      <i className="bi bi-calendar-check">
                        <span className="mx-2">{item.created_date}</span>
                      </i>
                      <i className="bi bi-share">
                        <span>Bagikan</span>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(data.length / displayPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const displayBeritaByCategories = filterByCategories
    .slice(pagesVisited, pagesVisited + displayPerPage)
    .map((item, index) => {
      return (
        <div key={index} className="col-md-6">
          <Fade bottom delay={index * 200}>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={item.image_id}
                  className="img-thumbnail img-berita"
                  alt="artikel-1"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal${index}`}
                />
              </div>
              <div className="col-md-6">
                <h5
                  className="text-color-primary title-berita"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal${index}`}
                >
                  {item.title}
                </h5>
                <h6 className="text-muted">{`Category : ${item.slug}`}</h6>
                <p className="text-muted">{item.description}</p>
                <i className="bi bi-calendar-check text-color-primary">
                  <span className="mx-2">{item.created_date}</span>
                </i>
              </div>
            </div>
            <hr className="mt-3" />
          </Fade>

          <div
            className="modal fade"
            id={`modal${index}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
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
                  <picture>
                    <img
                      src={item.image_id}
                      className="first-img-modal"
                      alt="statistik-penduduk"
                    />
                  </picture>
                  <div className="info-detail mt-3 text-color-primary">
                    <button className="btn btn-outline-success mb-3">
                      {item.slug}
                    </button>
                    <h5>{item.title}</h5>
                    <p className="text-muted">{item.description}</p>
                    <div className="icon-modal-berita">
                      <i className="bi bi-calendar-check">
                        <span className="mx-2">{item.created_date}</span>
                      </i>
                      <i className="bi bi-share">
                        <span>Bagikan</span>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  //  get unique categories from filterData slug
  const uniqueCategories = [...new Set(filterData.map((item) => item.slug))];

  const displayUniqueCategories = uniqueCategories.map((category, index) => {
    return (
      <Zoom delay={index * 500} key={index}>
        <button
          className={
            (select === category ? "active" : "") + " btn btn-outline-primary"
          }
          value={category}
          onClick={handleSelect}
        >
          {category}
        </button>
      </Zoom>
    );
  });

  return (
    <section id="berita" className="berita">
      <div className="container pt-5">
        <div className="text-center mb-5">
          <Fade top delay={300}>
            <h1 className="title-primary">Berita Terbaru</h1>
          </Fade>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="categories">
              <Zoom delay={400}>
                <button
                  className={
                    (select === "All" ? "active" : "") +
                    " btn btn-outline-primary"
                  }
                  id="btn-all"
                  value={"All"}
                  onClick={handleSelect}
                >
                  All
                </button>
              </Zoom>
              {displayUniqueCategories}
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-md-3 mt-lg-0">
            <Zoom delay={2300}>
              <form className="form d-flex justify-content-end">
                <i className="bi bi-search"></i>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Cari parawisata atau UMKM"
                  aria-label="Search"
                  onChange={handleSearch}
                />
              </form>
            </Zoom>
          </div>
        </div>
        <div className="content mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="wrapper-berita mt-5">
                <div className="content-berita pt-5 mx-5">
                  <div className="row">
                    {select === "All" && displayBerita}
                    {select !== null && displayBeritaByCategories}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReactPaginate
          previousLabel="&lt;"
          nextLabel="&gt;"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={changePage}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          breakClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </section>
  );
};

export default Berita;
