import React from "react";
import "./About.css";
import ProgressBar from "../../Component/Databar/Progress";

const About = () => {
  const kepalaDesa = [
    {
      id: "1",
      nama: "Ahud",
      keterangan: "Masa Penjajahan Belanda",
    },

    {
      id: "2",
      nama: "Samudin",
      keterangan: "Masa Penjajahan Belanda",
    },

    {
      id: "3",
      nama: "Arga Wijaya",
      keterangan: "Masa Penjajahan Belanda",
    },

    {
      id: "4",
      nama: "Sumawinata",
      keterangan: "Masa Penjajahan Belanda",
    },

    {
      id: "5",
      nama: "Ogin Sarbini",
      keterangan: "Masa Penjajahan Belanda",
    },

    {
      id: "6",
      nama: "Johob",
      keterangan: "Masa Republik",
    },

    {
      id: "7",
      nama: "Sahroni",
      keterangan: "Masa NICA",
    },

    {
      id: "8",
      nama: "Atmaja",
      keterangan: "Masa Penyerahan Kedaultan RIS",
    },

    {
      id: "9",
      nama: "U. Supandi",
      keterangan: "Masa ORLA",
    },

    {
      id: "10",
      nama: "Junaedi",
      keterangan: "Masa ORLA",
    },

    {
      id: "11",
      nama: "Atmaja",
      keterangan: "Masa ORLA",
    },

    {
      id: "12",
      nama: "H. Syarif",
      keterangan: "Masa ORBA",
    },

    {
      id: "13",
      nama: "Mamad",
      keterangan: "Masa ORBA",
    },

    {
      id: "14",
      nama: "Wawan Ruswanda",
      keterangan: "Masa Reformasi",
    },

    {
      id: "15",
      nama: "Didi Ruswandi",
      keterangan: "Masa Reformasi",
    },

    {
      id: "16",
      nama: "Wawan Ruswanda",
      keterangan: "Masa Reformasi",
    },

    {
      id: "17",
      nama: "Kuswandi",
      keterangan: "Masa Reformasi",
    },

    {
      id: "18",
      nama: "Bakang Anwar As’adi",
      keterangan: "Masa Reformasi Sekarang",
    },
  ];

  const displayKepalaDesa = kepalaDesa.map((item) => {
    return (
      <tr key={item.id} className="text-color-primary text-center">
        <th scope="row">{item.id}</th>
        <td>{item.nama}</td>
        <td>{item.keterangan}</td>
      </tr>
    );
  });
  return (
    <>
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

      <section id="sejarah" className="sejarah">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h3 className="h2-large text-color-primary">
                Sejarah dan Wilayah Desa
              </h3>

              <div className="wrapper shadow mt-3">
                <ProgressBar
                  nama={"Rumah"}
                  jumlah={"1.230"}
                  color={"#26AE5C"}
                  width={"300px"}
                  value={40}
                  max={100}
                />
                <ProgressBar
                  nama={"Penduduk"}
                  jumlah={"4.613"}
                  color={"#26AE5C"}
                  width={"300px"}
                  value={80}
                  max={100}
                />
                <ProgressBar
                  nama={"RT"}
                  jumlah={"21"}
                  color={"#26AE5C"}
                  width={"300px"}
                  value={10}
                  max={100}
                />
                <ProgressBar
                  nama={"RW"}
                  jumlah={"6"}
                  color={"#26AE5C"}
                  width={"300px"}
                  value={5}
                  max={100}
                />
              </div>
            </div>

            <div className="col-md-5">
              <img
                className="img-fluid rounded"
                src={require("../../Images/statistik-pengunjung.jpg")}
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="kepala-desa" className="kepala-desa">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="title-primary">Nama Kepala Desa</h3>
          </div>

          <table className="table mytable table-borderless mt-3">
            <thead className="table-color">
              <tr className="text-white text-center">
                <th scope="col">No</th>
                <th scope="col">Kepala Desa</th>
                <th scope="col">Keterangan</th>
              </tr>
            </thead>
            <tbody>{displayKepalaDesa}</tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default About;
