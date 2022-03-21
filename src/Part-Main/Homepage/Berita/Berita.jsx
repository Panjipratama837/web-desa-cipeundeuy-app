import React, { useEffect, useState } from "react";

import axios from "axios";
import ReactPaginate from "react-paginate";

const Berita = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterData = data.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.newsSite.toLowerCase().includes(search.toLowerCase())
    );
  });

  console.log(data);
  const displayPerPage = 6;
  const pagesVisited = pageNumber * displayPerPage;

  const displayBerita = filterData
    .slice(pagesVisited, pagesVisited + displayPerPage)
    .map((item) => {
      return (
        <div key={item.id} className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <img
                src={item.imageUrl}
                className="img-thumbnail"
                alt="artikel-1"
                data-bs-toggle="modal"
                data-bs-target={`#modal${item.id}`}
              />
            </div>
            <div className="col-md-6">
              <h5 className="text-color-primary">{item.title}</h5>
              <h6 className="text-muted">{`Category : ${item.newsSite}`}</h6>
              <p className="text-muted">{`${item.summary.slice(0, 50)} ...`}</p>
              <i className="bi bi-calendar-check text-color-primary">
                <span className="mx-2">{item.publishedAt}</span>
              </i>
            </div>
          </div>
          <div
            className="modal fade"
            id={`modal${item.id}`}
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
                      src={item.imageUrl}
                      className="first-img-modal"
                      alt="statistik-penduduk"
                    />
                  </picture>
                  <div className="info-detail mt-3 text-color-primary">
                    <button className="btn btn-outline-success mb-3">
                      {item.newsSite}
                    </button>
                    <h5>{item.title}</h5>
                    <p className="text-muted">
                      {`${item.summary} || Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Tempora dignissimos illum
                      reiciendis sed provident? At accusamus quos sit odio
                      eveniet reprehenderit necessitatibus officia ratione
                      inventore, soluta sunt veritatis consequatur earum. Iusto
                      eius hic dolore esse soluta labore nemo qui, repellat quam
                      dignissimos quas odit tenetur aspernatur placeat,
                      inventore libero. Dignissimos accusantium aperiam
                      consectetur sed obcaecati cumque sapiente, explicabo
                      aspernatur quisquam blanditiis iusto eveniet error in.
                      Soluta nemo architecto ducimus consequuntur repellat
                      obcaecati, perspiciatis incidunt ipsum iusto a eum quam
                      praesentium quod ipsam temporibus, harum, nobis assumenda.
                      Ex impedit aliquam, voluptatem explicabo modi, molestias,
                      optio in dolores exercitationem placeat enim repellendus.`}
                    </p>
                    <div className="icon-modal-berita">
                      <i className="bi bi-calendar-check">
                        <span className="mx-2">{item.publishedAt}</span>
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
          <hr className="mt-3" />
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

  console.log(select);

  // filter by select
  const filterByCategories = filterData.filter((item) => {
    return item.newsSite === select;
  });

  const displayBeritaByCategories = filterByCategories
    .slice(pagesVisited, pagesVisited + displayPerPage)
    .map((item) => {
      return (
        <div key={item.id} className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <img
                src={item.imageUrl}
                className="img-thumbnail"
                alt="artikel-1"
                data-bs-toggle="modal"
                data-bs-target={`#modal${item.id}`}
              />
            </div>
            <div className="col-md-6">
              <h5 className="text-color-primary">{item.title}</h5>
              <p className="text-muted">{`${item.summary.slice(0, 50)} ...`}</p>
              <i className="bi bi-calendar-check text-color-primary">
                <span className="mx-2">{item.publishedAt}</span>
              </i>
            </div>
          </div>
          <div
            className="modal fade"
            id={`modal${item.id}`}
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
                      src={item.imageUrl}
                      className="first-img-modal"
                      alt="statistik-penduduk"
                    />
                  </picture>
                  <div className="info-detail mt-3 text-color-primary">
                    <button className="btn btn-outline-success mb-3">
                      {item.newsSite}
                    </button>
                    <h5>{item.title}</h5>
                    <p className="text-muted">
                      {`${item.summary} || Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Tempora dignissimos illum
                      reiciendis sed provident? At accusamus quos sit odio
                      eveniet reprehenderit necessitatibus officia ratione
                      inventore, soluta sunt veritatis consequatur earum. Iusto
                      eius hic dolore esse soluta labore nemo qui, repellat quam
                      dignissimos quas odit tenetur aspernatur placeat,
                      inventore libero. Dignissimos accusantium aperiam
                      consectetur sed obcaecati cumque sapiente, explicabo
                      aspernatur quisquam blanditiis iusto eveniet error in.
                      Soluta nemo architecto ducimus consequuntur repellat
                      obcaecati, perspiciatis incidunt ipsum iusto a eum quam
                      praesentium quod ipsam temporibus, harum, nobis assumenda.
                      Ex impedit aliquam, voluptatem explicabo modi, molestias,
                      optio in dolores exercitationem placeat enim repellendus.`}
                    </p>
                    <div className="icon-modal-berita">
                      <i className="bi bi-calendar-check">
                        <span className="mx-2">{item.publishedAt}</span>
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
          <hr className="mt-3" />
        </div>
      );
    });

  //  get unique categories from filterData newsSite
  const uniqueCategories = [
    ...new Set(filterData.map((item) => item.newsSite)),
  ];

  const displayUniqueCategories = uniqueCategories.map((category) => {
    return (
      <button
        className="btn btn-outline-primary"
        value={category}
        onClick={handleSelect}
        key={category}
      >
        {category}
      </button>
    );
  });

  console.log(uniqueCategories);
  return (
    <section id="berita" className="berita">
      <div className="container pt-5">
        <div className="text-center mb-5">
          <h1 className="title-primary">Berita Terbaru</h1>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="categories">
              <button
                className="btn btn-outline-primary"
                value={"All"}
                onClick={handleSelect}
              >
                All
              </button>
              {displayUniqueCategories}
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-md-0 mt-lg-0">
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
          </div>
        </div>
        <div className="content mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="wrapper-berita mt-5">
                <div className="content-berita pt-5 mx-5">
                  <div className="row">
                    {select === "" && displayBerita}
                    {select !== null && displayBeritaByCategories}
                    {select === "All" && displayBerita}
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
