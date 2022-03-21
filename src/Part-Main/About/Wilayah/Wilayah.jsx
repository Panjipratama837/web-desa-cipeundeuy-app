import React from "react";
import { Fade } from "react-reveal";

// Pages
import ProgressBar from "../../../Component/Databar/Progress";

const Wilayah = () => {
  return (
    <section id="wilayah" className="wilayah">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Fade left delay={300}>
              <h3 className="h2-large text-color-primary">
                Sejarah dan Wilayah Desa
              </h3>
            </Fade>
            <Fade left delay={400}>
              <div className="wrapper shadow mt-3 ">
                <ProgressBar
                  nama={"Rumah"}
                  jumlah={"1.230"}
                  color={"#26AE5C"}
                  width={"100%"}
                  value={40}
                  max={100}
                />
                <ProgressBar
                  nama={"Penduduk"}
                  jumlah={"4.613"}
                  color={"#26AE5C"}
                  width={"100%"}
                  value={80}
                  max={100}
                />
                <ProgressBar
                  nama={"RT"}
                  jumlah={"21"}
                  color={"#26AE5C"}
                  width={"100%"}
                  value={10}
                  max={100}
                />
                <ProgressBar
                  nama={"RW"}
                  jumlah={"6"}
                  color={"#26AE5C"}
                  width={"100%"}
                  value={5}
                  max={100}
                />
              </div>
            </Fade>
          </div>

          <div className="col-md-5 mt-3 mt-md-0 mt-lg-0">
            <Fade right delay={350}>
              <img
                className="img-fluid rounded"
                src={require("../../../Images/statistik-pengunjung.jpg")}
                alt="alternative"
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wilayah;
