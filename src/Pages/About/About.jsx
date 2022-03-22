// Library
import React, { useEffect } from "react";

// Style
import "./About.css";

// Component
import HeaderAbout from "../../Part-Main/About/Header-About/HeaderAbout";
import Wilayah from "../../Part-Main/About/Wilayah/Wilayah";
import KepalaDesa from "../../Part-Main/About/Kepala-Desa/KepalaDesa";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <HeaderAbout />

      <Wilayah />

      <KepalaDesa />
    </>
  );
};

export default About;
