import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="content-footer text-white">
                <div className="footer-title mb-4">
                  <h3>Logo Desa Cipeundeuy</h3>
                </div>
                <p>
                  Long established fact that a reader will be distracted by the
                  readable content of page distracted.
                </p>
                <div className="row kontak">
                  <i className="bi bi-telephone">
                    <span className="ms-3">+62 822 3155 5644 (Whatsapp)</span>
                  </i>
                  <i className="bi bi-telephone">
                    <span className="ms-3">030 155 564 (Kantor)</span>
                  </i>
                  <i className="bi bi-envelope">
                    <span className="ms-3">desa_cipeundeuy@gmail.com</span>
                  </i>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-footer text-white">
                <div className="footer-title d-flex justify-content-end mb-4">
                  <h3>Lokasi Desa Cipeundeuy</h3>
                </div>
                <div className="d-flex justify-content-end">
                  <iframe
                    title="Desa Cipeundeuy Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63307.17128982581!2d106.51519683385699!3d-7.387676565048006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6801f6d1f5268d%3A0x59742113a5bf1a!2sCipeundeuy%2C%20Surade%2C%20Kabupaten%20Sukabumi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1647599248089!5m2!1sid!2sid"
                    width={480}
                    height={260}
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
