import React from "react";

const KepalaDesa = () => {
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
  );
};

export default KepalaDesa;
