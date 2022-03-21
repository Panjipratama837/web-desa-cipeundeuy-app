import React from "react";

const HeaderAbout = () => {
  return (
    <header id="header-about" className="header">
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <div
              className="text-about d-flex align-items-end justify-content-center"
              style={{ height: "250px" }}
            >
              <h1 className="h1-large">
                INFO DESA CIPEUNDEUY <br /> KABUPATEN SUKABUMI
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAbout;
