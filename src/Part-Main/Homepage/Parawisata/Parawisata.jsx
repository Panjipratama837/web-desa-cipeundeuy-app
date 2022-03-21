import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Fade from "react-reveal/Fade";

const Parawisata = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

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

  console.log(data);
  // if media query is less than 768px then set pageResponsive to 2
  // else set pageResponsive to 3

  const displayPerPage =
    window.innerWidth >= 577 && window.innerWidth <= 834 ? 2 : 3;
  console.log(window.innerWidth);

  const pagesVisited = pageNumber * displayPerPage;

  const displayParawisata = data
    .slice(pagesVisited, pagesVisited + displayPerPage)
    .map((item, index) => {
      return (
        <>
          <Fade bottom delay={index * 700}>
            <div key={item.id} className="col-md-6 col-lg-4">
              <img
                src={item.imageUrl}
                className="card-img-top img-component"
                alt={item.title}
                data-bs-toggle="modal"
                data-bs-target={`#modal${item.id}`}
              />
              <div className="card-body">
                <h5 className="card-title card-title-primary">{item.title}</h5>
              </div>
            </div>
          </Fade>

          <div
            className="modal fade"
            id={`modal${item.id}`}
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
                    <div className="col-md-7 col-7">
                      <picture>
                        <img
                          src={item.imageUrl}
                          className="first-img-modal"
                          alt="statistik-penduduk"
                        />
                      </picture>
                    </div>
                    <div className="col-md-5 col-5">
                      <picture>
                        <img
                          src={item.imageUrl}
                          className="second-img-modal"
                          alt="statistik-penduduk"
                        />
                      </picture>
                      <picture>
                        <img
                          src={item.imageUrl}
                          className="second-img-modal"
                          alt="statistik-penduduk"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="info-detail mt-3 text-color-primary">
                    <h5>{item.title}</h5>
                    <p>Rp. 25.000,00</p>
                    <div className="icon-modal">
                      <i className="bi bi-clock">
                        <span>{`${item.publishedAt} - ${item.updatedAt}`}</span>
                      </i>
                      <i className="bi bi-compass">
                        <span>{item.summary}</span>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });

  const pageCount = Math.ceil(data.length / displayPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section id="parawisata" className="parawisata">
      <div className="container pt-5">
        <div className="text-center mb-5">
          <Fade top delay={300}>
            <h1 className="title-primary">Explore Pariwisata Terbaik</h1>
          </Fade>
        </div>
        <div className="row mb-5">{displayParawisata}</div>
        <Fade bottom delay={300}>
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
        </Fade>
      </div>
    </section>
  );
};

export default Parawisata;
