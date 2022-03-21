import React from "react";
import { useEffect } from "react";
import "./Homepage.css";

// Pages
import Header from "../../Part-Main/Homepage/Header/Header";
import Parawisata from "../../Part-Main/Homepage/Parawisata/Parawisata";
import Produk from "../../Part-Main/Homepage/Umkm/Produk";
import Berita from "../../Part-Main/Homepage/Berita/Berita";

export default function Homepage() {
  useEffect(() => {
    document.title = "Homepage";
  }, []);

  return (
    <>
      <Header />

      <Parawisata />

      <Produk />

      <Berita />
    </>
  );
}
