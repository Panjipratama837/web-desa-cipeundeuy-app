import React from "react";
import Roll from "react-reveal/Roll";

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
              <Roll left delay={200}>
                <h1 className="h1-large">
                  INFO DESA CIPEUNDEUY <br /> KABUPATEN SUKABUMI
                </h1>
              </Roll>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAbout;
