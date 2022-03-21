import React from "react";
import "./About.css";
import HeaderAbout from "../../Part-Main/About/Header-About/HeaderAbout";
import Wilayah from "../../Part-Main/About/Wilayah/Wilayah";
import KepalaDesa from "../../Part-Main/About/Kepala-Desa/KepalaDesa";

const About = () => {
  return (
    <>
      <HeaderAbout />

      <Wilayah />

      <KepalaDesa />
    </>
  );
};

export default About;
